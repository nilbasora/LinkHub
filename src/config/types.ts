export type ThemeName = 'default' | 'dark' | 'neon';

//export type NeonStyle = 'old' | 'futuristic';

/*export interface ThemeOptions {
  style?: NeonStyle;
}*/

export type ThemeOptions = Record<string, string | number | boolean>;

export type SocialPlatform =
  | 'twitter'
  | 'x'
  | 'facebook'
  | 'github'
  | 'linkedin'
  | 'youtube'
  | 'instagram'
  | 'tiktok'
  | 'website';

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
}

export interface LinkItem {
  id: string;
  label: string;
  url: string;
  icon?: string;
}

export interface Section {
  id: string;
  title: string;
  links: LinkItem[];
}

export interface ThemeConfig {
  name?: ThemeName;
  options?: ThemeOptions;
}

export interface PageConfig {
  profile: {
    name: string;
    avatarUrl?: string;
    bio?: string;
  };
  social: SocialLink[];
  sections: Section[];
  theme?: ThemeConfig;
  analytics?: {
    provider?: 'plausible' | 'ga4' | 'none';
    domain?: string;
    measurementId?: string;
  };
}
