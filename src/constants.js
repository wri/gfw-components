// breakpoints for grid
export const SCREEN_S = 768;
export const SCREEN_M = 1024;
export const SCREEN_L = 1080;

export const breakpoints = {
  small: SCREEN_S,
  medium: SCREEN_M,
  large: SCREEN_L,
};

// Once globalnaturewatch.org is serving the app, this is the only line that
// needs to change for every *.globalforestwatch.org constant below.
export const GFW_DOMAIN = 'globalnaturewatch.org';

export const APP_URL = `https://www.${GFW_DOMAIN}`;
export const GFW_API = 'https://api.resourcewatch.org';
export const DATA_PORTAL_URL = `https://data.${GFW_DOMAIN}`;
export const BLOG_URL = `https://blog.${GFW_DOMAIN}`;
export const PRO_URL = `https://pro.${GFW_DOMAIN}`;
export const FOREST_WATCHER_URL = `https://forestwatcher.${GFW_DOMAIN}`;
export const DEVELOPERS_URL = `https://developers.${GFW_DOMAIN}`;
// Distinct from BLOG_URL (blog.globalforestwatch.org) — kept separate rather
// than normalized since collapsing them would change the URL this footer
// link currently produces.
export const APEX_BLOG_URL = `https://${GFW_DOMAIN}/blog`;
