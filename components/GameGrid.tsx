import React from "react";
import { Game } from "@/types/game";
import { GameCard } from "./GameCard";
import { GameCardSkeleton } from "./ui/Loading";

interface GameGridProps {
  games: Game[];
  loading?: boolean;
  className?: string;
}

export function GameGrid({
  games,
  loading = false,
  className = "",
}: GameGridProps) {
  if (!games.length) {
    return (
      <div
        className={`flex flex-col items-center justify-center py-12 ${className}`}
      >
        <div className="text-6xl mb-4">🎰</div>
        <h3 className="text-lg font-semibold text-white mb-2">
          No games found
        </h3>
        <p className="text-gray-400 text-center max-w-md">
          Try adjusting your filters or search terms to find more games.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,112px)] md:[grid-template-columns:repeat(auto-fit,150px)]">
      {loading ? (
        <>
          {Array.from({ length: 12 }).map((_, i) => (
            <GameCardSkeleton key={i} />
          ))}
        </>
      ) : (
        <>
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </>
      )}
    </div>
  );
}
