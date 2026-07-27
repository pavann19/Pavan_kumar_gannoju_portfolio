/**
 * Returns the base path for the app, accounting for GitHub Pages subpath deployment.
 * In production on GitHub Pages, assets live under /Pavan_kumar_gannoju_portfolio/
 * In development, they live at the root.
 *
 * Usage: assetPath("/Pavan_Kumar_Gannoju_CV.pdf") → "/Pavan_kumar_gannoju_portfolio/Pavan_Kumar_Gannoju_CV.pdf" in prod
 */

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export function assetPath(path: string): string {
  // If already prefixed or is an external URL, return as-is
  if (path.startsWith('http') || path.startsWith(basePath + '/')) {
    return path;
  }
  return `${basePath}${path}`;
}
