// src/components/LinkButton.tsx
import React from 'react';
import { Button } from '@/components/ui/button';
import { trackLinkClick } from '../analytics/analytics';
import type { LinkItem } from '../config/types';
import { FaGithub, FaGlobe, FaYoutube, FaCode } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import type { IconType } from 'react-icons';
import { useThemeTokens } from '../theme/ThemeContext';

const iconMap: Record<string, IconType> = {
  github: FaGithub,
  website: FaGlobe,
  youtube: FaYoutube,
  code: FaCode,
  x: FaXTwitter,
  twitter: FaXTwitter, // both can use X icon
};

export const LinkButton: React.FC<{ link: LinkItem }> = ({ link }) => {
  const tokens = useThemeTokens();
  const Icon = link.icon ? iconMap[link.icon] : undefined;

  return (
    <Button
      asChild
      className={tokens.linkButton.button}
      onClick={() => trackLinkClick(link.label, link.url)}
      variant="default"
    >
      <a
        href={link.url}
        target="_blank"
        rel="noreferrer"
        className={tokens.linkButton.anchor}
      >
        {Icon && <Icon className={tokens.linkButton.icon} />}
        <span className={tokens.linkButton.label}>{link.label}</span>
      </a>
    </Button>
  );
};
