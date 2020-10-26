import { DATA_PORTAL_URL, BLOG_URL } from 'constants';

import gfwPro from 'assets/logos/gfw-pro.png';
import forestWatcher from 'assets/logos/gfw-watcher.png';

import mapbuilder from 'assets/icons/mapbuilder.svg';
import sgf from 'assets/icons/sgf.svg';
import openData from 'assets/icons/open-data.svg';
import forum from 'assets/icons/forum.svg';
import mail from 'assets/icons/mail.svg';

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
    { label: 'Blog', extLink: BLOG_URL },
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
  ],
  moreLinks: [
    {
      label: 'Mapbuilder',
      href: '/mapbuilder/',
      icon: mapbuilder,
    },
    {
      label: 'Grants & Fellowships',
      href: '/grants-and-fellowships/projects/',
      icon: sgf,
    },
    { label: 'Open data portal', extLink: DATA_PORTAL_URL, icon: openData },
    {
      label: 'Discussion Forum',
      extLink: 'https://groups.google.com/forum/#!forum/globalforestwatch',
      icon: forum,
    },
    {
      label: 'Contact us',
      onClick: 'handleContactUsOpen',
      icon: mail,
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
      label: 'Português (Brasil)',
      value: 'pt_BR',
    },
    {
      label: 'Español (Mexico)',
      value: 'es_MX',
    },
  ],
};
