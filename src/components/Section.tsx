// src/components/Section.tsx
import React from 'react';
import type { Section } from '../config/types';
import { LinkButton } from './LinkButton';
import { useThemeTokens } from '../theme/ThemeContext';

export const SectionView: React.FC<{ section: Section }> = ({ section }) => {
  const tokens = useThemeTokens();

  return (
    <section className={tokens.sections.section}>
      <h2 className={tokens.sections.title}>{section.title}</h2>
      <div className={tokens.sections.linksWrapper}>
        {section.links.map((l) => (
          <LinkButton key={l.id} link={l} />
        ))}
      </div>
    </section>
  );
};
