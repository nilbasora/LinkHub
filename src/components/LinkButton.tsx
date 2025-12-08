import React from 'react';
import { Button } from '@/components/ui/button';
import { trackLinkClick } from '../analytics/analytics';
import type { LinkItem } from '../config/types';

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
  FaCode,
} from 'react-icons/fa6';

const iconMap: Record<string, any> = {
  github: FaGithub,
  website: FaGlobe,
  youtube: FaYoutube,
  code: FaCode,
  twitter: FaTwitter,
  x: FaXTwitter,
  linkedin: FaLinkedin,
  facebook: FaFacebook,
  instagram: FaInstagram,
  tiktok: FaTiktok,
};

export const LinkButton = ({ link }: { link: LinkItem }) => {
  const Icon = link.icon ? iconMap[link.icon] : null;

  return (
    <Button
      asChild
      className="w-full justify-center gap-2 text-base h-12"
      onClick={() => trackLinkClick(link.label, link.url)}
    >
      <a href={link.url} target="_blank">
        {Icon && <Icon className="h-4 w-4" />}
        {link.label}
      </a>
    </Button>
  );
};
