import { API_ROUTE_VOICES } from "@/constants/routes";
import { useEffect, useRef, useState } from "react";

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
  API_DELAY: 2000,
} as const;

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

  const fetchVoices = async () => {
    setLoading(true);
    setError(null);

    try {
      const params = new URLSearchParams({
        page: currentPage.toString(),
        limit: DEFAULT_VALUES.VOICE_LIMIT.toString(),
        language: selectedLanguage,
        search: debouncedSearchQuery,
      });

      const response = await fetch(`${API_ROUTE_VOICES}?${params}`);

      if (!response.ok) {
        throw new Error("Failed to fetch voices");
      }

      const data: VoicesResponse = await response.json();

      if (currentPage === 1) {
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
    }
  };

  // Debounce search query
  useEffect(() => {
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    searchTimeoutRef.current = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, DEFAULT_VALUES.SEARCH_DEBOUNCE_DELAY);

    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, [searchQuery]);

  useEffect(() => {
    fetchVoices();
  }, [currentPage, selectedLanguage, debouncedSearchQuery]);

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    setCurrentPage(1); // Reset to first page when language changes
    setVoices([]); // Clear existing voices
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1); // Reset to first page when search changes
    setVoices([]); // Clear existing voices
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
    handleLanguageChange,
    handleSearchChange,
    handlePageChange,
    refetch: fetchVoices,
  };
};
