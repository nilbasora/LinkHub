// src/theme/neon/index.ts
import type { ThemeTokens, ThemeOptions } from '../ThemeContext';
import defaultGetTokens from '../default';

export type NeonOptions = ThemeOptions & {
  style?: 'old' | 'futur';
};

const getTokens = (options?: NeonOptions): ThemeTokens => {
  // DEFAULT: old
  const style = options?.style === 'futur' ? 'futur' : 'old';

  const base = defaultGetTokens();

  if (style === 'old') {
    return {
      ...base,
      app: {
        ...base.app,
        wrapper:
          'min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-purple-950 via-fuchsia-900 to-slate-950',
      },

      // 🔥 Neon profile (title + bio readable & glowing)
      profileHeader: {
        ...base.profileHeader,
        avatar:
          'w-28 h-28 border border-pink-400 shadow-[0_0_25px_rgba(236,72,153,0.9)] overflow-hidden rounded-full [&>span]:hidden',
        name:
          'text-3xl font-semibold tracking-tight text-pink-100 drop-shadow-[0_0_12px_rgba(244,114,182,0.9)]',
        bio:
          'text-sm text-pink-200/90 max-w-xs drop-shadow-[0_0_10px_rgba(244,114,182,0.7)]',
      },

      // 🔥 Section titles in neon pink
      sections: {
        ...base.sections,
        title:
          'text-xs font-semibold uppercase tracking-[0.18em] text-pink-300/90 drop-shadow-[0_0_10px_rgba(244,114,182,0.6)]',
      },

      // 🔥 Glowing neon pills for links
      linkButton: {
        button:
          'w-full h-14 rounded-full bg-pink-500 text-white border border-pink-300 shadow-[0_0_26px_rgba(236,72,153,0.95)] font-semibold transition duration-150 hover:bg-pink-400',
        anchor: 'flex items-center justify-center gap-2 w-full h-full',
        iconWrapper: 'flex items-center justify-center',
        icon: 'h-4 w-4 text-white',
        label:
          'text-base font-semibold text-white drop-shadow-[0_0_8px_rgba(252,231,243,0.9)]',
      },

      // 🔥 Socials already quite neon, just keep them
      socialLinks: {
        nav: 'flex items-center justify-center gap-4 mt-1',
        button:
          'rounded-full bg-black/40 border border-pink-400 text-pink-300 backdrop-blur-md transition duration-150 hover:-translate-y-1 hover:bg-pink-500 hover:text-black hover:border-pink-200 shadow-[0_0_12px_rgba(244,114,182,0.9)]',
        icon: 'w-4 h-4',
      },
    };
  }

  // ⚡ futur style: cyan / blue neon
  return {
    ...base,
    app: {
      ...base.app,
      wrapper:
        'min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950',
    },

    profileHeader: {
      ...base.profileHeader,
      name:
        'text-3xl font-semibold tracking-tight text-cyan-100 drop-shadow-[0_0_12px_rgba(34,211,238,0.9)]',
      bio:
        'text-sm text-cyan-200/90 max-w-xs drop-shadow-[0_0_10px_rgba(34,211,238,0.7)]',
    },

    sections: {
      ...base.sections,
      title:
        'text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300/90 drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]',
    },

    linkButton: {
      button:
        'w-full h-14 rounded-2xl text-sm font-medium bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 hover:brightness-110 border border-cyan-300/60 shadow-[0_0_30px_rgba(34,211,238,0.9)]',
      anchor: 'flex items-center justify-between px-4 w-full h-full',
      iconWrapper: 'flex items-center justify-center',
      icon: 'h-4 w-4 text-slate-950',
      label:
        'flex-1 text-center text-base font-semibold text-slate-950 drop-shadow-[0_0_6px_rgba(15,23,42,0.7)]',
    },

    socialLinks: {
      nav: 'flex items-center justify-center gap-4 mt-1',
      button:
        'rounded-xl bg-slate-900/70 border border-cyan-400/60 text-cyan-200 backdrop-blur-md transition duration-150 hover:-translate-y-1 hover:bg-cyan-400 hover:text-slate-950 hover:border-cyan-200 shadow-[0_0_14px_rgba(34,211,238,0.9)]',
      icon: 'w-4 h-4',
    },
  };
};

export default getTokens;
