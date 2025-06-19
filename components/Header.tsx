"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { MultiValue } from "react-select";
import { Option } from "./ui/MultiSelect";
import { SearchBar } from "./SearchBar";
import { Navigation } from "./Navigation";

import { GameCategory, GameFilters, GameProvider } from "@/types/game";
import { GAME_CATEGORIES, GAME_PROVIDERS } from "@/lib/constants";

const MultiSelect = dynamic(() => import("./ui/MultiSelect"), {
  ssr: false,
});

interface HeaderProps {
  onSearch: (query: string) => void;
  onCategoryChange: (categories: GameCategory[]) => void;
  onProviderChange: (providers: GameProvider[]) => void;
  filters: Partial<GameFilters>;
  className?: string;
}

export function Header({
  onSearch,
  onCategoryChange,
  onProviderChange,
  filters,
  className = "",
}: HeaderProps) {
  const [selectedCategories, setSelectedCategories] = useState<
    MultiValue<Option>
  >([]);
  const [selectedProviders, setSelectedProviders] = useState<
    MultiValue<Option>
  >([]);

  useEffect(() => {
    if (filters.categories && filters.categories?.length > 0) {
      const selected: Array<{ value: GameCategory; label: string }> = [];
      filters.categories.forEach((item) => {
        const category = GAME_CATEGORIES.find(
          (cat) => item.toLocaleLowerCase() === cat.value
        );
        if (category) {
          selected.push(category);
        }
      });

      setSelectedCategories(selected);
    }
  }, [filters.categories]);

  useEffect(() => {
    if (filters.providers && filters.providers?.length > 0) {
      const selected: Array<{ value: GameProvider; label: string }> = [];
      filters.providers.forEach((item) => {
        const provider = GAME_PROVIDERS.find(
          (cat) => item.toLocaleLowerCase() === cat.value
        );
        if (provider) {
          selected.push(provider);
        }
      });

      setSelectedCategories(selected);
    }
  }, [filters.providers]);

  const handleCategorySelect = (selectedOptions: MultiValue<Option>) => {
    setSelectedCategories(selectedOptions);
    const categories = selectedOptions.map(
      (option) => option.value as GameCategory
    );
    onCategoryChange(categories);
  };

  const handleProviderSelect = (selectedOptions: MultiValue<Option>) => {
    setSelectedProviders(selectedOptions);
    const providers = selectedOptions.map(
      (option) => option.value as GameProvider
    );
    onProviderChange(providers);
  };

  return (
    <header className={`bg-gray-900 ${className}`}>
      <div className="flex flex-col md:flex-row md:flex-wrap gap-4 py-4 px-2 md:px-8">
        <div className="order-1 md:order-1 w-full md:w-[calc(60%-8px)]">
          <SearchBar onSearch={onSearch} searchValue={filters.search} />
        </div>

        <div className="order-3 md:order-2 w-full md:w-[calc(40%-8px)] gap-4 flex">
          <MultiSelect
            options={GAME_CATEGORIES}
            value={selectedCategories}
            onSelect={handleCategorySelect}
            placeholder="Collections"
          />
          <MultiSelect
            options={GAME_PROVIDERS}
            value={selectedProviders}
            onSelect={handleProviderSelect}
            placeholder="Providers"
          />
        </div>

        <div className="order-2 md:order-3 w-full">
          <Navigation onCategoryChange={onCategoryChange} />
        </div>
      </div>
    </header>
  );
}
