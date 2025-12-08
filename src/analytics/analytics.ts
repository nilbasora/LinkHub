import { pageConfig } from '../config/loadConfig';

declare global {
  interface Window {
    plausible?: (event: string, opts?: any) => void;
    gtag?: (...args: any[]) => void;
  }
}

export function trackPageView() {
  const provider = pageConfig.analytics?.provider ?? 'none';

  if (provider === 'plausible' && window.plausible) {
    window.plausible('pageview');
  }

  if (provider === 'ga4' && window.gtag) {
    window.gtag('event', 'page_view');
  }
}

export function trackLinkClick(label: string, url: string) {
  const provider = pageConfig.analytics?.provider ?? 'none';

  if (provider === 'plausible' && window.plausible) {
    window.plausible('Link click', { props: { label, url } });
  }

  if (provider === 'ga4' && window.gtag) {
    window.gtag('event', 'click', {
      event_category: 'outbound',
      event_label: label,
    });
  }
}
