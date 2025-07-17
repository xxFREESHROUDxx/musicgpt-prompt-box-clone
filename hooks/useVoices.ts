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
        limit: "8",
        language: selectedLanguage,
        search: debouncedSearchQuery,
      });

      const response = await fetch(`/api/voices?${params}`);

      if (!response.ok) {
        throw new Error("Failed to fetch voices");
      }

      const data: VoicesResponse = await response.json();

      if (currentPage === 1) {
        setVoices(data.voices);
      } else {
        setVoices((prev) => [...prev, ...data.voices]);
      }
      setPagination(data.pagination);
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
    }, 300);

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
