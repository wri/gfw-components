import { breakpoints } from 'constants';

const mediaQueries = Object.entries(breakpoints).reduce(
  (obj, [size, value]) => ({
    ...obj,
    [size]: `@media (min-width: ${value}px)`,
  }),
  {}
);

export default {
  fontFamily: "'Fira Sans', Arial, sans-serif",
  mediaQueries,
  breakpoints: Object.values(breakpoints).map((br) => `${br}px`),
  colors: {
    white: '#fff',
    black: '#000',
    green: '#97be32',
    darkGreen: '#658022',
    slate: '#555',
    slateDark: '#333',
    border: '#e5e5df',
    yellow: '#fffee2',
    error: '#ed1846',
    grey: '#aaa',
    lightGrey: '#f7f7f7',
    warmGrey: '#999',
    darkGrey: 'd6d6d9',
    greyishBrown: '#4a4a4a',
  },
  grid: {
    mobileGutter: '16px',
    desktopGutter: '20px',
  },
};
