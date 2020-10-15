import {
  HOWTO_URL,
  DATA_PORTAL_URL,
  BLOG_URL,
  DEVELOPERS_URL,
} from 'constants';

import gfwPro from 'assets/logos/gfw-pro.png';
import forestWatcher from 'assets/logos/gfw-watcher.png';

import developer from 'assets/icons/developer.svg';
import howto from 'assets/icons/howto.svg';
import sgf from 'assets/icons/sgf.svg';
import openData from 'assets/icons/open-data.svg';
import blog from 'assets/icons/blog.svg';
import forum from 'assets/icons/forum.svg';

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
      extLink: 'http://forestwatcher.globalforestwatch.org',
      image: forestWatcher,
    },
  ],
  moreLinks: [
    { label: 'Developer Tools', extLink: DEVELOPERS_URL, icon: developer },
    { label: 'How to Portal', extLink: HOWTO_URL, icon: howto },
    {
      label: 'Grants & Fellowships',
      href: '/grants-and-fellowships/projects/',
      icon: sgf,
    },
    { label: 'Open data portal', extLink: DATA_PORTAL_URL, icon: openData },
    { label: 'Blog', extLink: BLOG_URL, icon: blog },
    {
      label: 'Discussion Forum',
      extLink: 'https://groups.google.com/forum/#!forum/globalforestwatch',
      icon: forum,
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
