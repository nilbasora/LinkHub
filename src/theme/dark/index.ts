// src/theme/default/index.ts
import type { ThemeTokens, ThemeOptions } from '../ThemeContext';

const defaultTokens: ThemeTokens = {
  app: {
    wrapper:
      'min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950',
    main:
      'w-full max-w-md mx-auto px-6 py-10 flex flex-col items-center gap-10',
  },
  profileHeader: {
    header: 'flex flex-col items-center text-center gap-3',
    avatar:
      'w-28 h-28 border border-white/20 shadow-lg overflow-hidden rounded-full [&>span]:hidden',
    avatarImage: 'object-cover w-full h-full',
    textWrapper: 'space-y-1 mt-1',
    name: 'text-2xl font-semibold tracking-tight',
    bio: 'text-sm text-muted-foreground max-w-xs',
  },
  sections: {
    section: 'w-full space-y-3',
    title:
      'text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground',
    linksWrapper: 'flex flex-col gap-3',
  },
  linkButton: {
    button:
      'w-full justify-center gap-2 h-12 rounded-full text-base font-medium bg-accent text-background hover:bg-accent/90',
    anchor: '',
    icon: 'h-4 w-4',
    iconWrapper: '',
    label: 'text-white',
  },
  socialLinks: {
    nav: 'flex items-center justify-center gap-3 mt-1',
    button:
      'rounded-full bg-white/5 border border-white/15 text-muted-foreground backdrop-blur transition duration-150 hover:-translate-y-0.5 hover:bg-accent hover:text-background hover:border-accent/70 shadow-sm hover:shadow-lg focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background',
    icon: 'w-4 h-4',
  },
};

// Export a factory so options could be used if needed later
const getTokens = (_options?: ThemeOptions): ThemeTokens => defaultTokens;

export default getTokens;
