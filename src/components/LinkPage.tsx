// src/components/LinkPage.tsx
import React, { useEffect } from 'react';
import { pageConfig } from '../config/loadConfig';
import { ProfileHeader } from './ProfileHeader';
import { SocialLinks } from './SocialLinks';
import { SectionView } from './Section';
import { trackPageView } from '../analytics/analytics';
import { useThemeTokens } from '../theme/ThemeContext';

export const LinkPage: React.FC = () => {
  const tokens = useThemeTokens();

  useEffect(() => {
    trackPageView();
  }, []);

  return (
    <main className={tokens.app.main}>
      <ProfileHeader />
      <SocialLinks />

      <div className="w-full flex flex-col gap-8">
        {pageConfig.sections.map((section) => (
          <SectionView key={section.id} section={section} />
        ))}
      </div>
    </main>
  );
};
