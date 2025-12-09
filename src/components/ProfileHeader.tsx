// src/components/ProfileHeader.tsx
import React from 'react';
import { pageConfig } from '../config/loadConfig';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { useThemeTokens } from '../theme/ThemeContext';

export const ProfileHeader: React.FC = () => {
  const p = pageConfig.profile;
  const tokens = useThemeTokens();

  return (
    <header className={tokens.profileHeader.header}>
      <Avatar className={tokens.profileHeader.avatar}>
        {p.avatarUrl && (
          <AvatarImage
            src={p.avatarUrl}
            alt={p.name}
            className={tokens.profileHeader.avatarImage}
          />
        )}
      </Avatar>

      <div className={tokens.profileHeader.textWrapper}>
        <h1 className={tokens.profileHeader.name}>{p.name}</h1>
        {p.bio && <p className={tokens.profileHeader.bio}>{p.bio}</p>}
      </div>
    </header>
  );
};
