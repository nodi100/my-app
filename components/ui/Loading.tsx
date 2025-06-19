import React from "react";

interface LoadingProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Loading({ className = "", size = "md" }: LoadingProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div
        className={`animate-spin rounded-full border-2 border-gray-300 border-t-primary-500 ${sizeClasses[size]}`}
      />
    </div>
  );
}

export function GameCardSkeleton() {
  return (
    <div className="relative w-[112px] h-[150px] md:w-[150px] md:h-[200px] rounded-lg overflow-hidden bg-gray-800 animate-pulse">
      <div className="aspect-[4/3] bg-gray-700" />
      <div className="absolute bottom-2 left-2 right-2">
        <div className="h-4 bg-gray-600 rounded mb-1" />
        <div className="h-3 bg-gray-600 rounded w-2/3" />
      </div>
    </div>
  );
}
