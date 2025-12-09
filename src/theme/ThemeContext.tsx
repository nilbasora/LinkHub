// src/theme/ThemeContext.tsx
import { createContext, useContext } from 'react';

export type ThemeName = string;

export interface ThemeOptions {
  [key: string]: unknown;
}

/**
 * All classNames (and optionally styles) that your theme can control.
 * You can extend this as needed.
 */
export interface ThemeTokens {
  app: {
    wrapper: string; // Around the whole app (ThemeProvider div)
    main: string;    // <main> in LinkPage
  };
  profileHeader: {
    header: string;
    avatar: string;
    avatarImage: string;
    textWrapper: string;
    name: string;
    bio: string;
  };
  sections: {
    section: string;
    title: string;
    linksWrapper: string;
  };
  linkButton: {
    button: string;
    anchor: string;
    icon: string;
    iconWrapper: string;
    label: string;
  };
  socialLinks: {
    nav: string;
    button: string;
    icon: string;
  };
}

export const ThemeContext = createContext<ThemeTokens | null>(null);

export const useThemeTokens = (): ThemeTokens => {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useThemeTokens must be used within a ThemeProvider');
  }
  return ctx;
};
