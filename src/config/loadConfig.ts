import type {
  PageConfig,
  SocialLink,
  SocialPlatform,
  LinkItem,
  Section,
  ThemeName,
} from './types';

import rawConfig from '../../setup.yaml';

const isBlank = (v: unknown) =>
  v === undefined ||
  v === null ||
  (typeof v === 'string' && v.trim() === '');

const humanize = (str: string) =>
  str
    .replace(/[_-]+/g, ' ')
    .replace(/\b\w/g, (m) => m.toUpperCase());

// SOCIAL
function normalizeSocial(rawSocial: any): SocialLink[] {
  if (!rawSocial || typeof rawSocial !== 'object') return [];

  const result: SocialLink[] = [];

  for (const [rawKey, rawUrl] of Object.entries(rawSocial)) {
    if (isBlank(rawUrl)) continue;

    const key = String(rawKey).toLowerCase();
    const url = String(rawUrl);

    let platform: SocialPlatform | null = null;

    switch (key) {
      case 'x':
        platform = 'x';
        break;
      case 'twitter':
        platform = 'twitter';
        break;
      case 'github':
        platform = 'github';
        break;
      case 'linkedin':
        platform = 'linkedin';
        break;
      case 'facebook':
        platform = 'facebook';
        break;
      case 'youtube':
        platform = 'youtube';
        break;
      case 'instagram':
        platform = 'instagram';
        break;
      case 'tiktok':
        platform = 'tiktok';
        break;
      case 'website':
        platform = 'website';
        break;
      default:
        console.warn('Unknown social platform in config:', rawKey);
        platform = null;
    }

    if (!platform) continue;

    result.push({ platform, url });
  }

  return result;
}

// SECTIONS
function normalizeSections(rawSections: any): Section[] {
  if (!rawSections) return [];

  const result: Section[] = [];

  for (const [sectionId, sec] of Object.entries<any>(rawSections)) {
    const title = sec.title?.trim();
    if (!title) continue;

    const linkBlock = sec.links ?? {};
    const links: LinkItem[] = [];

    for (const [linkId, link] of Object.entries<any>(linkBlock)) {
      const label = isBlank(link.title)
        ? humanize(linkId)
        : String(link.title).trim();

      const url = String(link.url ?? '').trim();
      if (!url) continue;

      const icon = isBlank(link.icon) ? undefined : String(link.icon).trim();

      links.push({ id: linkId, label, url, icon });
    }

    if (!links.length) continue;

    result.push({ id: sectionId, title, links });
  }

  return result;
}

// THEME
function normalizeTheme(raw: any): PageConfig['theme'] {
  if (!raw) return undefined;
  const name = (raw.name as ThemeName) || 'default';
  const options = raw.options ?? undefined;
  return { name, options };
}

function normalizeAnalytics(raw: any) {
  if (!raw) return undefined;

  const provider =
    raw.provider === 'plausible' ||
    raw.provider === 'ga4' ||
    raw.provider === 'none'
      ? raw.provider
      : 'none';

  const domain = isBlank(raw.domain) ? undefined : raw.domain;
  const measurementId = isBlank(raw.measurementId)
    ? undefined
    : raw.measurementId;

  return { provider, domain, measurementId };
}

export const pageConfig: PageConfig = (() => {
  const profileRaw = rawConfig.profile ?? {};
  const profile = {
    name: profileRaw.name ?? 'Unnamed',
    avatarUrl: isBlank(profileRaw.avatarUrl)
      ? undefined
      : profileRaw.avatarUrl,
    bio: isBlank(profileRaw.bio) ? undefined : profileRaw.bio,
  };

  return {
    profile,
    social: normalizeSocial(rawConfig.social),
    sections: normalizeSections(rawConfig.sections),
    theme: normalizeTheme(rawConfig.theme),
    analytics: normalizeAnalytics(rawConfig.analytics),
  };
})();
