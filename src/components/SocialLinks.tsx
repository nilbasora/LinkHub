// src/components/SocialLinks.tsx
import React from 'react';
import { pageConfig } from '../config/loadConfig';
import { Button } from '@/components/ui/button';
import type { SocialPlatform } from '../config/types';
import {
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaTiktok,
  FaGlobe,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import type { IconType } from 'react-icons';
import { useThemeTokens } from '../theme/ThemeContext';

const icons: Partial<Record<SocialPlatform, IconType>> = {
  twitter: FaTwitter,
  x: FaXTwitter,
  github: FaGithub,
  linkedin: FaLinkedin,
  facebook: FaFacebook,
  youtube: FaYoutube,
  instagram: FaInstagram,
  tiktok: FaTiktok,
  website: FaGlobe,
};

export const SocialLinks: React.FC = () => {
  const social = pageConfig.social;
  const tokens = useThemeTokens();

  if (!social.length) return null;

  return (
    <nav className={tokens.socialLinks.nav}>
      {social.map((s) => {
        const Icon = icons[s.platform];
        if (!Icon) return null;

        return (
          <Button
            key={s.platform}
            asChild
            size="icon"
            variant="ghost"
            className={tokens.socialLinks.button}
          >
            <a href={s.url} target="_blank" rel="noreferrer">
              <Icon className={tokens.socialLinks.icon} />
            </a>
          </Button>
        );
      })}
    </nav>
  );
};
