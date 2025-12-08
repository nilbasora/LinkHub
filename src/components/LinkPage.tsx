import React, { useEffect } from 'react';
import { pageConfig } from '../config/loadConfig';
import { ProfileHeader } from './ProfileHeader';
import { SocialLinks } from './SocialLinks';
import { SectionView } from './Section';
import { trackPageView } from '../analytics/analytics';
import { Card, CardContent } from '@/components/ui/card';

export const LinkPage = () => {
  useEffect(() => {
    trackPageView();
  }, []);

  return (
    <main className="w-full max-w-lg mx-auto px-4">
      <Card className="bg-card/70 backdrop-blur border border-border/50">
        <CardContent className="pt-6">
          <ProfileHeader />
          <SocialLinks />
          {pageConfig.sections.map((section) => (
            <SectionView key={section.id} section={section} />
          ))}
        </CardContent>
      </Card>
    </main>
  );
};
