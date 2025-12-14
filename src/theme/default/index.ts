// src/theme/default/index.ts
import type { ThemeTokens, ThemeOptions } from '../ThemeContext';

const pastelTokens: ThemeTokens = {
  app: {
    wrapper:
      'min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-rose-50 via-amber-50 to-emerald-50',
    main:
      'w-full max-w-md mx-auto px-6 py-10 flex flex-col items-center gap-10',
  },

  profileHeader: {
    header: 'flex flex-col items-center text-center gap-3',
    avatar:
      'w-28 h-28 border border-rose-200 shadow-md overflow-hidden rounded-full [&>span]:hidden',
    avatarImage: 'object-cover w-full h-full',
    textWrapper: 'space-y-1 mt-1',
    name: 'text-2xl font-semibold tracking-tight text-black',
    bio: 'text-sm text-slate-700 max-w-xs',
  },

  sections: {
    section: 'w-full space-y-3',
    title:
      'text-xs font-semibold uppercase tracking-[0.18em] text-slate-600',
    linksWrapper: 'flex flex-col gap-3',
  },

  linkButton: {
    button:
      `
      w-full h-14 rounded-full
      bg-emerald-50/60
      border-2 border-black
      shadow-[0_6px_0_rgba(0,0,0,0.35)]
      transition-transform transition-shadow duration-150
      hover:bg-emerald-50
      hover:translate-y-[1px]
      hover:shadow-[0_4px_0_rgba(0,0,0,0.35)]
      active:translate-y-[2px]
      active:shadow-[0_2px_0_rgba(0,0,0,0.35)]
      px-2
      `,
    anchor: 'flex items-center gap-3 w-full h-full',
    iconWrapper:
      'flex items-center justify-center w-10 h-10 rounded-full bg-white border border-black shrink-0',
    icon: 'h-4 w-4 text-black',
    label: 'flex-1 text-center text-base font-semibold text-black',
  },

  socialLinks: {
    nav: 'flex items-center justify-center gap-3 mt-1',
    button:
      `
      rounded-xl
      bg-white border border-slate-300
      text-black
      backdrop-blur-sm
      transition duration-200
      hover:-translate-y-[2px]
      hover:bg-slate-100
      hover:text-black
      shadow-sm hover:shadow-md
      focus-visible:ring-2
      focus-visible:ring-slate-400
      focus-visible:ring-offset-2
      `,
    icon: 'w-4 h-4 text-black',
  },
};

const getTokens = (_options?: ThemeOptions): ThemeTokens => pastelTokens;

export default getTokens;
