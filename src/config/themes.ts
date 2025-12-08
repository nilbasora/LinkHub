import type { ThemeName, ThemeOptions } from './types';

export interface ThemeTokens {
  '--bg-color': string;
  '--text-color': string;
  '--accent-color': string;
  '--card-bg': string;
  '--button-radius': string;
}

type ThemeFactory = (options?: ThemeOptions) => ThemeTokens;

const defaultTheme: ThemeFactory = (options) => ({
  '--bg-color': '#0f172a',
  '--text-color': '#e5e7eb',
  '--accent-color': (options?.accentColor as string) ?? '#6366f1',
  '--card-bg': '#020617',
  '--button-radius': options?.roundedButtons ? '9999px' : '0.5rem',
});

const darkTheme: ThemeFactory = () => ({
  '--bg-color': '#000',
  '--text-color': '#fff',
  '--accent-color': '#f97316',
  '--card-bg': '#111827',
  '--button-radius': '0.75rem',
});

const neonTheme: ThemeFactory = () => ({
  '--bg-color': '#020617',
  '--text-color': '#22c55e',
  '--accent-color': '#22c55e',
  '--card-bg': '#020617',
  '--button-radius': '9999px',
});

const registry: Record<ThemeName, ThemeFactory> = {
  default: defaultTheme,
  dark: darkTheme,
  neon: neonTheme,
};

export function getThemeTokens(name?: ThemeName, options?: ThemeOptions) {
  return registry[name ?? 'default'](options);
}
