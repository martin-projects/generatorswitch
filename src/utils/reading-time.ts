/**
 * Calculate estimated reading time for an article
 */

const WORDS_PER_MINUTE = 200;

/**
 * Calculate reading time from raw content
 */
export function calculateReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / WORDS_PER_MINUTE);
  return Math.max(1, minutes);
}

/**
 * Format reading time for display
 */
export function formatReadingTime(minutes: number): string {
  return `${minutes} min read`;
}

/**
 * Get reading time string from content
 */
export function getReadingTime(content: string): string {
  const minutes = calculateReadingTime(content);
  return formatReadingTime(minutes);
}
