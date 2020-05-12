import { createMedia } from '@artsy/fresnel';

import { SCREEN_S, SCREEN_M, SCREEN_ML, SCREEN_L, SCREEN_XL } from 'constants';

const ExampleAppMedia = createMedia({
  breakpoints: {
    sm: SCREEN_S,
    md: SCREEN_M,
    mdl: SCREEN_ML,
    lg: SCREEN_L,
    xl: SCREEN_XL,
  },
});

// Make styles for injection into the header of the page
export const mediaStyles = ExampleAppMedia.createMediaStyle();
export const { Media, MediaContextProvider } = ExampleAppMedia;

/* eslint react/prop-types: 0 */
export const Mobile = (props) => <Media lessThan="md">{props.children}</Media>;
export const Desktop = (props) => (
  <Media greaterThanOrEqual="md">{props.children}</Media>
);
