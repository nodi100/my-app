"use client";

import { useState, useCallback } from "react";
import { GameApiResponse, GameFilters } from "@/types/game";
import { fetchGames } from "@/lib/api";

export function useGames(initialFilters: Partial<GameFilters> = {}) {
  const [data, setData] = useState<GameApiResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<Partial<GameFilters>>(initialFilters);

  const loadGames = useCallback(
    async (newFilters?: Partial<GameFilters>) => {
      setLoading(true);
      setError(null);

      try {
        const filtersToUse = newFilters || filters;
        const result = await fetchGames(filtersToUse);
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load games");
      } finally {
        setLoading(false);
      }
    },
    [filters]
  );

  const updateFilters = useCallback(
    (newFilters: Partial<GameFilters>) => {
      const updatedFilters = { ...filters, ...newFilters, page: 1 }; // Reset to page 1 when filters change
      setFilters(updatedFilters);
      loadGames(updatedFilters);
    },
    [filters, loadGames]
  );

  const goToPage = useCallback(
    (page: number) => {
      const updatedFilters = { ...filters, page };
      setFilters(updatedFilters);
      loadGames(updatedFilters);
    },
    [filters, loadGames]
  );

  return {
    data,
    loading,
    error,
    filters,
    updateFilters,
    goToPage,
    refetch: loadGames,
  };
}
