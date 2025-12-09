// src/theme/index.ts
import type { ThemeName, ThemeOptions, ThemeTokens } from './ThemeContext';
import defaultGetTokens from './default';

// Vite-specific: eagerly import every ./<name>/index.ts
const modules = import.meta.glob('./*/index.ts', {
  eager: true,
}) as Record<string, { default: (options?: ThemeOptions) => ThemeTokens }>;

// Build a registry: { "default": fn, "dark": fn, "neon": fn, ... }
const themeRegistry: Record<string, (options?: ThemeOptions) => ThemeTokens> =
  {};

for (const path in modules) {
  const match = path.match(/\.\/([^/]+)\/index\.ts$/);
  if (!match) continue;
  const themeName = match[1];
  themeRegistry[themeName] = modules[path].default;
}

// Make sure "default" always exists
if (!themeRegistry.default) {
  themeRegistry.default = defaultGetTokens;
}

export const getThemeTokens = (
  name?: ThemeName,
  options?: ThemeOptions,
): ThemeTokens => {
  const key = name ?? 'default';
  const fn = themeRegistry[key] ?? themeRegistry.default;
  return fn(options);
};
