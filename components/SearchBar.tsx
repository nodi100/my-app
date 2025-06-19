"use client";

import React, { useState, useEffect } from "react";
import { Search, X } from "lucide-react";

interface SearchBarProps {
  onSearch: (query: string) => void;
  searchValue?: string;
  placeholder?: string;
  className?: string;
}

export function SearchBar({
  onSearch,
  searchValue = "",
  placeholder = "Search your game",
  className = "",
}: SearchBarProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    setQuery(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (query.length >= 3 || query.length === 0) {
        onSearch(query);
      }
    }, 300);

    return () => clearTimeout(handler);
  }, [query]);

  const handelSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setQuery(value);
  };

  const handleClear = () => {
    setQuery("");
    onSearch("");
  };

  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <input
          type="text"
          value={query}
          onChange={handelSearch}
          placeholder={placeholder}
          className="w-full pl-10 pr-10 h-10 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
      {query.length > 0 && query.length < 3 && (
        <p className="text-xs text-gray-400 mt-1">
          Type at least 3 characters to search
        </p>
      )}
    </div>
  );
}
