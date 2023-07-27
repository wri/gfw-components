import { DATA_PORTAL_URL } from 'constants';

import gfwPro from 'assets/logos/gfw-pro.png';
import forestWatcher from 'assets/logos/gfw-watcher.png';
import gfr from 'assets/logos/gfr.png';

import mapbuilder from 'assets/icons/mapbuilder.svg';
import openData from 'assets/icons/open-data.svg';

export default {
  navMain: [
    { label: 'Map', href: '/map/' },
    { label: 'Dashboard', href: '/dashboards/global/' },
    {
      label: 'Topics',
      href: '/topics/',
      submenu: [
        {
          label: 'Biodiversity',
          href: '/topics/biodiversity/',
        },
        { label: 'Climate', href: '/topics/climate/' },
        {
          label: 'Commodities',
          href: '/topics/commodities/',
        },
        { label: 'Water', href: '/topics/water/' },
        { label: 'Fires', href: '/topics/fires/' },
      ],
    },
    { label: 'Blog', href: '/blog/' },
    { label: 'About', href: '/about/' },
    { label: 'Help', href: '/help/' },
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
      label: 'Mapbuilder',
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
