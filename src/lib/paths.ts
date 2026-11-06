export const REPO_NAME = "nemi_portfolio";

export const BASE_PATH =
  process.env.NODE_ENV === "production" ? `/${REPO_NAME}` : "";

/**
 * Returns a properly prefixed asset path for local development and GitHub Pages.
 *
 * - Adds `/nemi_portfolio` to asset paths in production.
 * - Uses normal root-relative paths during local development.
 * - Handles paths with or without a leading slash.
 * - Does not accidentally create duplicate slashes.
 * - Preserves external URLs (http/https/data/blob).
 *
 * Expected behavior:
 * - Development: `/images/movie-mania.png`
 * - Production:  `/nemi_portfolio/images/movie-mania.png`
 */
export function assetPath(path: string): string {
  if (!path) {
    return BASE_PATH || "/";
  }

  // Preserve external URLs, data/blob URIs, and anchors
  if (/^(https?:|data:|blob:|mailto:|#)/i.test(path)) {
    return path;
  }

  // Remove any leading slashes to normalize
  let clean = path.replace(/^\/+/, "");

  // Prevent duplicate base path prefix if already present
  if (clean.startsWith(`${REPO_NAME}/`)) {
    clean = clean.slice(`${REPO_NAME}/`.length);
  } else if (clean === REPO_NAME) {
    clean = "";
  }

  if (!clean) {
    return BASE_PATH || "/";
  }

  return BASE_PATH ? `${BASE_PATH}/${clean}` : `/${clean}`;
}

