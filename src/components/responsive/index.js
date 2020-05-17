import { createMedia } from '@artsy/fresnel';

import { breakpoints } from 'constants';

const ExampleAppMedia = createMedia({
  breakpoints: { base: 0, ...breakpoints },
});

// Make styles for injection into the header of the page
export const mediaStyles = ExampleAppMedia.createMediaStyle();
export const { Media, MediaContextProvider } = ExampleAppMedia;

/* eslint react/prop-types: 0 */
export const Mobile = (props) => (
  <Media lessThan="small">{props.children}</Media>
);
export const Desktop = (props) => (
  <Media greaterThanOrEqual="small">{props.children}</Media>
);
