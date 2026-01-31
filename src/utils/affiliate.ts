/**
 * Affiliate link utilities for Amazon Associates and other programs
 */

const AMAZON_AFFILIATE_TAG = import.meta.env.AMAZON_AFFILIATE_TAG || 'generatorswitch-20';

/**
 * Generate an Amazon affiliate link from an ASIN
 */
export function amazonLink(asin: string, tag?: string): string {
  const affiliateTag = tag || AMAZON_AFFILIATE_TAG;
  return `https://www.amazon.com/dp/${asin}?tag=${affiliateTag}`;
}

/**
 * Generate an Amazon search link with affiliate tag
 */
export function amazonSearchLink(query: string, tag?: string): string {
  const affiliateTag = tag || AMAZON_AFFILIATE_TAG;
  const encodedQuery = encodeURIComponent(query);
  return `https://www.amazon.com/s?k=${encodedQuery}&tag=${affiliateTag}`;
}

/**
 * Get affiliate link attributes for proper SEO
 */
export function affiliateLinkAttrs(): Record<string, string> {
  return {
    rel: 'sponsored noopener',
    target: '_blank',
  };
}

/**
 * Product data structure for comparison tables and product cards
 */
export interface Product {
  name: string;
  brand: string;
  model: string;
  asin?: string;
  amps: number;
  type: 'manual' | 'automatic';
  circuits?: number;
  indoor: boolean;
  outdoor: boolean;
  warranty?: string;
  priceRange: string;
  rating?: number;
  bestFor?: string;
  pros?: string[];
  cons?: string[];
  amazonUrl?: string;
}

/**
 * Format price range for display
 */
export function formatPriceRange(min: number, max: number): string {
  return `$${min.toLocaleString()} - $${max.toLocaleString()}`;
}
