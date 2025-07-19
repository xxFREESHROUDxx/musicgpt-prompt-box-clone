import { API_ROUTE_VOICES } from "@/constants/routes";
import { useCallback, useEffect, useRef, useState } from "react";

export interface Voice {
  name: string;
  language: string;
}

export interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  totalVoices: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export interface VoicesResponse {
  voices: Voice[];
  pagination: PaginationInfo;
}

const DEFAULT_VALUES = {
  VOICE_LIMIT: 8,
  SEARCH_DEBOUNCE_DELAY: 300,
} as const;

// Create a cache for voice data to work with Suspense
const voiceCache = new Map<string, Promise<VoicesResponse>>();

export const fetchVoicesData = (
  page: number,
  language: string,
  search: string,
): Promise<VoicesResponse> => {
  const cacheKey = `${page}-${language}-${search}`;

  if (voiceCache.has(cacheKey)) {
    return voiceCache.get(cacheKey)!;
  }

  const promise = (async () => {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: DEFAULT_VALUES.VOICE_LIMIT.toString(),
      language,
      search,
    });

    const response = await fetch(`${API_ROUTE_VOICES}?${params}`);

    if (!response.ok) {
      throw new Error("Failed to fetch voices");
    }

    return response.json();
  })();

  voiceCache.set(cacheKey, promise);
  return promise;
};

// Clear cache when needed
export const clearVoiceCache = () => {
  voiceCache.clear();
};

export const useVoices = () => {
  const [voices, setVoices] = useState<Voice[]>([]);
  const [pagination, setPagination] = useState<PaginationInfo | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedLanguage, setSelectedLanguage] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Debounce search query
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState("");
  const searchTimeoutRef = useRef<NodeJS.Timeout>();

  // Track if we're in the middle of a search to prevent flickering
  const [isTypingSearch, setIsTypingSearch] = useState(false);

  // Refs to track current fetch parameters to prevent duplicate calls
  const currentFetchRef = useRef<{
    page: number;
    language: string;
    search: string;
  } | null>(null);

  // Track if user is actively searching (only for typing indicator)
  const isSearching =
    isTypingSearch ||
    (searchQuery !== "" && searchQuery !== debouncedSearchQuery);

  const fetchVoices = useCallback(
    async (resetVoices = false) => {
      // Prevent duplicate calls with same parameters
      const fetchParams = {
        page: currentPage,
        language: selectedLanguage,
        search: debouncedSearchQuery,
      };

      if (
        currentFetchRef.current &&
        currentFetchRef.current.page === fetchParams.page &&
        currentFetchRef.current.language === fetchParams.language &&
        currentFetchRef.current.search === fetchParams.search
      ) {
        return;
      }

      currentFetchRef.current = fetchParams;
      setLoading(true);
      setError(null);

      try {
        const data = await fetchVoicesData(
          currentPage,
          selectedLanguage,
          debouncedSearchQuery,
        );

        if (currentPage === 1 || resetVoices) {
          setVoices(data?.voices || []);
        } else {
          setVoices((prev) => [...prev, ...(data?.voices || [])]);
        }
        setPagination(
          data?.pagination || {
            currentPage: 1,
            totalPages: 1,
            totalVoices: 0,
            hasNextPage: false,
            hasPrevPage: false,
          },
        );
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
        setIsTypingSearch(false);
      }
    },
    [currentPage, selectedLanguage, debouncedSearchQuery],
  );

  // Handle search debouncing without clearing voices immediately
  useEffect(() => {
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    // Only set typing state if there's a difference between current and debounced
    if (searchQuery !== debouncedSearchQuery) {
      setIsTypingSearch(true);
    }

    searchTimeoutRef.current = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
      // Reset current fetch ref when search changes to allow new fetch
      currentFetchRef.current = null;
    }, DEFAULT_VALUES.SEARCH_DEBOUNCE_DELAY);

    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, [searchQuery, debouncedSearchQuery]);

  // Fetch voices when dependencies change
  useEffect(() => {
    fetchVoices(true); // Reset voices for new search/filter
  }, [selectedLanguage, debouncedSearchQuery]);

  // Fetch more voices when page changes (for pagination)
  useEffect(() => {
    if (currentPage > 1) {
      fetchVoices(false); // Don't reset voices for pagination
    }
  }, [currentPage]);

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    setCurrentPage(1);
    currentFetchRef.current = null; // Reset fetch ref
    clearVoiceCache(); // Clear cache to force fresh data
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
    currentFetchRef.current = null; // Reset fetch ref
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return {
    voices,
    pagination,
    loading,
    error,
    currentPage,
    selectedLanguage,
    searchQuery,
    debouncedSearchQuery,
    isSearching,
    handleLanguageChange,
    handleSearchChange,
    handlePageChange,
    refetch: () => {
      currentFetchRef.current = null;
      clearVoiceCache();
      fetchVoices(true);
    },
  };
};
