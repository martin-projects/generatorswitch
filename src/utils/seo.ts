/**
 * SEO utilities for meta tags and structured data
 */

export interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogImageAlt?: string;
  article?: {
    publishDate: Date;
    updatedDate?: Date;
    author?: string;
    tags?: string[];
  };
  noindex?: boolean;
}

/**
 * Generate a full page title with site name
 */
export function getPageTitle(title: string, siteName = 'Generator Switch Guide'): string {
  if (title === siteName) {
    return title;
  }
  return `${title} | ${siteName}`;
}

/**
 * Truncate description to SEO-friendly length
 */
export function truncateDescription(description: string, maxLength = 155): string {
  if (description.length <= maxLength) {
    return description;
  }
  return description.substring(0, maxLength - 3).trim() + '...';
}

/**
 * Generate canonical URL
 */
export function getCanonicalUrl(path: string, siteUrl = 'https://generatorswitchguide.com'): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${siteUrl}${cleanPath}`;
}

/**
 * Format date for structured data (ISO 8601)
 */
export function formatDateISO(date: Date): string {
  return date.toISOString();
}

/**
 * Format date for display
 */
export function formatDateDisplay(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
