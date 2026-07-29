import TwitterIcon from 'assets/icons/social/twitter.svg';
import FacebookIcon from 'assets/icons/social/facebook.svg';
import InstagramIcon from 'assets/icons/social/instagram.svg';
import YoutubeIcon from 'assets/icons/social/youtube.svg';
import LinkedinIcon from 'assets/icons/social/linkedin.svg';

import { APP_URL, APEX_BLOG_URL } from 'constants';

export default {
  links: [
    {
      label: 'Map',
      link: `${APP_URL}/map`,
    },
    {
      label: 'Dashboards',
      link: `${APP_URL}/dashboards`,
    },
    {
      label: 'Topics',
      link: `${APP_URL}/topics/biodiversity/`,
    },
    {
      label: 'Blog',
      link: APEX_BLOG_URL,
    },
    {
      label: 'About',
      link: `${APP_URL}/about/`,
    },
    {
      label: 'Help',
      link: `${APP_URL}/help/`,
    },
  ],
  socialLinks: [
    {
      label: 'linkedin',
      link: 'https://www.linkedin.com/showcase/globalforestwatch/',
      icon: LinkedinIcon,
    },
    {
      label: 'twitter',
      link: 'https://twitter.com/globalforests',
      icon: TwitterIcon,
    },
    {
      label: 'facebook',
      link: 'https://www.facebook.com/globalnaturewatch',
      icon: FacebookIcon,
    },
    {
      label: 'instagram',
      link: 'https://www.instagram.com/globalnaturewatch/',
      icon: InstagramIcon,
    },
    {
      label: 'youtube',
      link: 'https://www.youtube.com/channel/UCAsamYre1KLulf4FD-xJfLA',
      icon: YoutubeIcon,
    },
  ],
};
