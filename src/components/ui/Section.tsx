import React from 'react';
import { Container } from './Container';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export function Section({ children, id, className = '' }: SectionProps) {
  return (
    <section id={id} className={`py-20 ${className}`}>
      <Container>
        {children}
      </Container>
    </section>
  );
}