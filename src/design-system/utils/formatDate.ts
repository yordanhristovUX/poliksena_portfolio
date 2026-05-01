/**
 * Formats an ISO date string for display.
 * Uses Intl.DateTimeFormat for locale-aware output.
 */
export function formatDate(
  dateString: string,
  options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  },
): string {
  return new Intl.DateTimeFormat('en-US', options).format(new Date(dateString));
}

/** Returns a short date like "Jan 2024" */
export function formatDateShort(dateString: string): string {
  return formatDate(dateString, { year: 'numeric', month: 'short' });
}
