"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Game } from "@/types/game";

interface GameCardProps {
  game: Game;
  className?: string;
}

export function GameCard({ game, className = "" }: GameCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className={`group relative rounded-lg overflow-hidden bg-gray-800 transition-all duration-200 cursor-pointer ${className}`}
    >
      <div className="relative w-[112px] h-[150px] md:w-[150px] md:h-[200px] overflow-hidden">
        {!imageError ? (
          <Image
            src={game.image}
            alt={game.name}
            fill
            className={`object-cover transition-transform duration-300 group-hover:scale-105 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gray-700 flex items-center justify-center">
            <span className="text-gray-400 text-sm">No Image</span>
          </div>
        )}

        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-gray-700 animate-pulse" />
        )}

        <div className="absolute inset-0 flex flex-col justify-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <h3 className="text-white font-semibold text-sm mb-1 truncate">
            {game.name}
          </h3>
          <p className="text-gray-300 text-xs truncate">{game.provider}</p>
        </div>
      </div>
    </div>
  );
}
