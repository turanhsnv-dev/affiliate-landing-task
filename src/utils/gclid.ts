/**
 * GCLID Injection Utility
 * 
 * This utility extracts the gclid parameter from the current page URL
 * and appends it directly to affiliate links without any separators.
 * 
 * Example:
 * - User lands on: /?gclid=TEST_VALUE
 * - Original link: https://brand-offer.com/click123
 * - Final link: https://brand-offer.com/click123TEST_VALUE
 */

/**
 * Extracts the gclid value from the current page URL
 * @returns The gclid value if present, null otherwise
 */
export function getGclidValue(): string | null {
  if (typeof window === 'undefined') {
    return null;
  }
  
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('gclid');
}

/**
 * Appends the gclid value to an affiliate URL
 * The value is appended directly without any separators (no ?, &, or =)
 * 
 * @param affiliateUrl - The original affiliate URL
 * @param gclidValue - The gclid value to append (optional, will be extracted from URL if not provided)
 * @returns The affiliate URL with gclid value appended
 */
export function appendGclidToUrl(affiliateUrl: string, gclidValue?: string | null): string {
  const gclid = gclidValue !== undefined ? gclidValue : getGclidValue();
  
  if (!gclid) {
    return affiliateUrl;
  }
  
  // Append gclid value directly to the URL (no separators)
  return affiliateUrl + gclid;
}

