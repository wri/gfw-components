import { breakpoints } from 'constants';

const mediaQueries = Object.entries(breakpoints).reduce(
  (obj, [size, value]) => ({
    ...obj,
    [size]: `@media (min-width: ${value}px)`,
  }),
  {}
);

export default {
  siteDefaultWidth: '1120px',
  fontFamily: "'Fira Sans', Arial, sans-serif",
  mediaQueries,
  breakpoints: Object.values(breakpoints).map((br) => `${br}px`),
  colors: {
    green: '#97be32',
    darkGreen: '#658022',
    darkestGrey: '#333',
    darkGrey: '#555',
    mediumGrey: '#777',
    grey: '#aaa',
    lightGrey: '#e5e5df',
    lightestGrey: '#f7f7f7',
    white: '#fff',
    black: '#000',
    lightYellow: '#fffee2',
    proGrey: '#333333',
    error: '#ed1846',
  },
  grid: {
    mobileGutter: '16px',
    desktopGutter: '20px',
  },
};
