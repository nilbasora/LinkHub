import React from 'react';
import { pageConfig } from '../config/loadConfig';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

export const ProfileHeader = () => {
  const p = pageConfig.profile;
  const initials = p.name
    .split(' ')
    .map((x) => x[0])
    .join('');

  return (
    <div className="flex flex-col justify-center items-center mb-6">
      <Avatar className="w-20 h-20 mb-3">
        {p.avatarUrl && <AvatarImage src={p.avatarUrl} />}
        <AvatarFallback>{initials}</AvatarFallback>
      </Avatar>

      <h1 className="text-2xl font-semibold">{p.name}</h1>
      {p.bio && (
        <p className="text-sm text-muted-foreground max-w-xs text-center mt-1">
          {p.bio}
        </p>
      )}
    </div>
  );
};
