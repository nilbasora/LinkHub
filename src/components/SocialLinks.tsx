import React from 'react';
import { pageConfig } from '../config/loadConfig';
import { Button } from '@/components/ui/button';
import {
  FaTwitter,
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaTiktok,
  FaGlobe,
} from 'react-icons/fa6';
import type { SocialPlatform } from '../config/types';

const icons: Record<SocialPlatform, any> = {
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

export const SocialLinks = () => {
  if (!pageConfig.social.length) return null;

  return (
    <div className="flex gap-2 justify-center mb-6">
      {pageConfig.social.map((s) => {
        const Icon = icons[s.platform];
        return (
          <Button key={s.platform} asChild size="icon" variant="ghost">
            <a href={s.url} target="_blank">
              <Icon className="w-5 h-5" />
            </a>
          </Button>
        );
      })}
    </div>
  );
};
