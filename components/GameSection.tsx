"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { Game } from "@/types/game";
import { GameCard } from "./GameCard";

interface GameSectionProps {
  title: string;
  games: Game[];
  icon?: React.ReactNode;
  className?: string;
}

export function GameSection({
  title,
  games,
  icon,
  className = "",
}: GameSectionProps) {
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      const newPosition =
        direction === "left"
          ? scrollPosition - scrollAmount
          : scrollPosition + scrollAmount;

      scrollRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
      setScrollPosition(newPosition);
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      setScrollPosition(scrollRef.current.scrollLeft);
    }
  };

  return (
    <div className={`w-full${className}`}>
      {games.length === 0 ? (
        <>
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            {icon || <Sparkles className="w-5 h-5 text-primary-500" />}
            {title}
          </h2>
          <div className="bg-gray-800 rounded-lg p-8 text-center">
            <p className="text-gray-400">
              Failed to load games. Please try again later.
            </p>
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm md:text-xl font-bold text-white flex items-center gap-2">
              {icon || <Sparkles className="w-5 h-5 text-primary-500" />}
              {title}
            </h2>

            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll("left")}
                className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={scrollPosition <= 0}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-2 md:gap-4 overflow-x-auto scrollbar-hide pb-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {games.map((game) => (
              <div key={game.id} className="flex-shrink-0">
                <GameCard game={game} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
