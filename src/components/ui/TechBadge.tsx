import React from 'react';

interface TechBadgeProps {
  children: React.ReactNode;
}

export function TechBadge({ children }: TechBadgeProps) {
  return (
    <span className="inline-block px-3 py-1 text-sm font-medium rounded-full select-none
      bg-gray-100 text-gray-800 
      dark:bg-gray-800 dark:text-gray-200 
      border border-gray-200 dark:border-gray-700">
      {children}
    </span>
  );
}