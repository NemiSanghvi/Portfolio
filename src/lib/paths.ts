/**
 * Utility for constructing asset URLs.
 *
 * For Vercel deployment we serve from the domain root, so no repository
 * prefix is required. The helper ensures:
 * - external URLs (http, https, data, blob, mailto, #) are returned unchanged
 * - a leading slash is added if missing
 * - empty input returns "/"
 */
export function assetPath(path: string): string {
  if (!path) return "/";
  // Preserve external URLs, data/blob URIs, and anchors
  if (/^(https?:|data:|blob:|mailto:|#)/i.test(path)) return path;
  // Remove any leading slashes to normalize
  const clean = path.replace(/^\/+/, "");
  return `/${clean}`;
}
