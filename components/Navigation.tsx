"use client";

import React, { useState } from "react";
import { NAVIGATION_ITEMS } from "@/lib/constants";
import { GameCategory } from "@/types/game";

interface NavigationProps {
  onCategoryChange: (categories: GameCategory[]) => void;
  className?: string;
}

export function Navigation({
  onCategoryChange,
  className = "",
}: NavigationProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    NAVIGATION_ITEMS[0].value
  );

  const selectCategory = (category: string) => {
    setSelectedCategory(category);
    if (!!category) {
      onCategoryChange([category as GameCategory]);
    } else {
      onCategoryChange([]);
    }
  };
  return (
    <nav className={`bg-gray-900 ${className}`}>
      <div className="w-full mx-auto">
        <div
          className="flex items-center space-x-4 overflow-x-auto scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {NAVIGATION_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                className={`flex items-center space-x-2 px-2 py-2 rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === item.value
                    ? "bg-gray-700 text-white"
                    : "bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700"
                }`}
                onClick={() => {
                  selectCategory(item.value);
                }}
              >
                <Icon />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
