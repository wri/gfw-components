import { createMedia } from '@artsy/fresnel';

import { breakpoints } from 'constants';

const ExampleAppMedia = createMedia({
  breakpoints: { base: 0, ...breakpoints },
});

// Make styles for injection into the header of the page
export const mediaStyles = ExampleAppMedia.createMediaStyle();
export const { Media, MediaContextProvider } = ExampleAppMedia;
