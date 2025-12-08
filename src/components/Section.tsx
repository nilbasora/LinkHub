import React from 'react';
import { LinkButton } from './LinkButton';
import type { Section } from '../config/types';

export const SectionView = ({ section }: { section: Section }) => {
  return (
    <div className="mb-6 w-full">
      <h2 className="text-xs font-semibold uppercase text-muted-foreground mb-2">
        {section.title}
      </h2>
      <div className="flex flex-col gap-3">
        {section.links.map((l) => (
          <LinkButton key={l.id} link={l} />
        ))}
      </div>
    </div>
  );
};
