// breakpoints for grid
export const SCREEN_S = 768;
export const SCREEN_M = 1024;
export const SCREEN_L = 1080;

export const breakpoints = {
  small: SCREEN_S,
  medium: SCREEN_M,
  large: SCREEN_L,
};

// Two domains on purpose. The flagship app itself now serves from
// globalnaturewatch.org, but the sibling apps and services below did not move
// with it: pro, forestwatcher, data and blog have no globalnaturewatch.org
// host at all, so deriving them from the new domain pointed the header's
// "Other Tools" menu at addresses that fail to resolve (PZB-1284).
//
// Each host migrates on its own schedule. Move a URL from GFW_DOMAIN to
// GNW_DOMAIN only once that specific host is actually serving — not as a
// side effect of the app's own domain changing.
export const GNW_DOMAIN = 'globalnaturewatch.org';
export const GFW_DOMAIN = 'globalforestwatch.org';

export const APP_URL = `https://www.${GNW_DOMAIN}`;
export const GFW_API = 'https://api.resourcewatch.org';
export const DATA_PORTAL_URL = `https://data.${GFW_DOMAIN}`;
export const BLOG_URL = `https://blog.${GFW_DOMAIN}`;
export const PRO_URL = `https://pro.${GFW_DOMAIN}`;
export const FOREST_WATCHER_URL = `https://forestwatcher.${GFW_DOMAIN}`;
// Note: developers.* does not resolve on either domain today; this is
// pre-existing and the constant is currently unused.
export const DEVELOPERS_URL = `https://developers.${GFW_DOMAIN}`;
// Distinct from BLOG_URL (blog.globalforestwatch.org) — kept separate rather
// than normalized since collapsing them would change the URL this footer
// link currently produces.
export const APEX_BLOG_URL = `https://${GNW_DOMAIN}/blog`;
