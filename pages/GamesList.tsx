"use client";

import React, { useCallback } from "react";
import { Flame, Crown, Zap, Award, BadgeDollarSign } from "lucide-react";
import { Header } from "@/components/Header";
import { GameSection } from "@/components/GameSection";
import { GameGrid } from "@/components/GameGrid";
import { Pagination } from "@/components/Pagination";
import { useGames } from "@/hooks/useGames";
import { GameCategory, GameProvider, Game } from "@/types/game";
import { FEATURED_SECTIONS } from "@/lib/constants";

interface GamesListProps {
  initialGames: Record<GameCategory, Game[]>;
}

export default function GamesList({ initialGames }: GamesListProps) {
  const { data, loading, filters, updateFilters, goToPage } = useGames({
    limit: 20,
  });

  const handleSearch = useCallback(
    (search: string) => {
      updateFilters({ search });
    },
    [updateFilters]
  );

  const handleCategoryChange = useCallback(
    (categories: GameCategory[]) => {
      updateFilters({ categories });
    },
    [updateFilters]
  );

  const handleProviderChange = useCallback(
    (providers: GameProvider[]) => {
      updateFilters({ providers });
    },
    [updateFilters]
  );

  const hasActiveFilters =
    (filters.categories?.length ?? 0) > 0 ||
    (filters.providers?.length ?? 0) > 0 ||
    (filters.search?.length ?? 0) > 0;

  return (
    <div className="min-h-screen bg-gray-900">
      <Header
        onSearch={handleSearch}
        onCategoryChange={handleCategoryChange}
        onProviderChange={handleProviderChange}
        filters={filters}
      />

      <main className="px-2 md:px-8 py-4">
        {hasActiveFilters ? (
          <>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold text-white mb-2">
                  {filters.search
                    ? `Search results for "${filters.search}"`
                    : "All Games"}
                </h1>
                {data && (
                  <p className="text-gray-400">
                    {data.pagination.total_items} games found
                    {data.filters_applied.providers.length > 0 && (
                      <span>
                        {" "}
                        • Providers: {data.filters_applied.providers.join(", ")}
                      </span>
                    )}
                    {data.filters_applied.categories.length > 0 && (
                      <span>
                        {" "}
                        • Categories:{" "}
                        {data.filters_applied.categories.join(", ")}
                      </span>
                    )}
                  </p>
                )}
              </div>
            </div>

            <GameGrid
              games={data?.data || []}
              loading={loading}
              className="mb-8"
            />

            {data?.pagination && data.pagination.total_pages > 1 && (
              <Pagination
                currentPage={data.pagination.current_page}
                totalPages={data.pagination.total_pages}
                hasNextPage={data.pagination.has_next_page}
                hasPrevPage={data.pagination.has_prev_page}
                onPageChange={goToPage}
              />
            )}
          </>
        ) : (
          <div className="space-y-8">
            {FEATURED_SECTIONS.map((section, index) => (
              <GameSection
                key={section.category}
                title={section.title}
                games={initialGames[section.category]}
                icon={
                  index === 0 ? (
                    <Crown className="w-5 h-5" />
                  ) : index === 1 ? (
                    <Zap className="w-5 h-5" />
                  ) : index === 2 ? (
                    <Flame className="w-5 h-5" />
                  ) : index === 3 ? (
                    <Award className="w-5 h-5" />
                  ) : (
                    <BadgeDollarSign className="w-5 h-5" />
                  )
                }
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
