import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionTitle({ children, className = '' }: SectionTitleProps) {
  return (
    <h2 className={`text-3xl font-bold mb-12 dark:text-white ${className}`}>
      {children}
    </h2>
  );
}