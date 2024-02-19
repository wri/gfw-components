import { DATA_PORTAL_URL } from 'constants';

import gfwPro from 'assets/logos/gfw-pro.png';
import forestWatcher from 'assets/logos/gfw-watcher.png';
import gfr from 'assets/logos/gfr.png';

import mapbuilder from 'assets/icons/mapbuilder.svg';
import openData from 'assets/icons/open-data.svg';

export default {
  navMain: [
    { label: 'Map', href: '/map/', isVisibleOnMobile: true },
    {
      label: 'Dashboard',
      href: '/dashboards/global/',
      isVisibleOnMobile: true,
    },
    {
      label: 'Help',
      href: '/help/',
      isVisibleOnMobile: false,
      submenu: [
        {
          label: 'Help Center',
          href: '/help/',
        },
        /* // TODO: enable these 2 links when we have the real urls
        {
          label: 'Events',
          href: '/events/',
        },
        {
          label: 'FAQ',
          href: '/faq/',
        },
        */
        {
          label: 'Grants & Opportunities',
          href: '/grants-and-fellowships/projects/',
        },
        {
          label: 'Contact Us',
          onClick: () => [],
          isContactModal: true,
        },
      ],
    },
    {
      label: 'About',
      href: '/about/',
      isVisibleOnMobile: false,
      submenu: [
        {
          label: 'About GFW',
          href: '/about/',
        },
        {
          label: 'Why Forests',
          href: '/topics/biodiversity/',
        },
      ],
    },
    {
      label: 'Blog',
      href: '/blog/',
      isVisibleOnMobile: true,
    },
  ],
  apps: [
    {
      label: 'GFW Pro',
      extLink: 'https://pro.globalforestwatch.org',
      image: gfwPro,
    },
    {
      label: 'Forest Watcher',
      extLink: 'https://forestwatcher.globalforestwatch.org',
      image: forestWatcher,
    },
    {
      label: 'Global Forest Review',
      extLink: 'https://research.wri.org/gfr/global-forest-review',
      image: gfr,
    },
  ],
  moreLinks: [
    {
      label: 'MapBuilder',
      extLink: 'https://mapbuilder.wri.org/',
      icon: mapbuilder,
      tooltip: 'Combine your own data with GFW datasets',
    },
    {
      label: 'Open Data Portal',
      extLink: DATA_PORTAL_URL,
      icon: openData,
      tooltip: 'Access GFW data directly',
    },
  ],
  languages: [
    {
      label: 'English',
      value: 'en',
    },
    {
      label: '中文',
      value: 'zh',
    },
    {
      label: 'Français',
      value: 'fr',
    },
    {
      label: 'Bahasa Indonesia',
      value: 'id',
    },
    {
      label: 'Português',
      value: 'pt_BR',
    },
    {
      label: 'Español',
      value: 'es_MX',
    },
  ],
};
