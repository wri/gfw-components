const path = require('path');
const camelCase = require('lodash/camelCase');
const upperFirst = require('lodash/upperFirst');

const webpackConfig = require('./webpack.config.js');
const { version } = require('./package.json');

module.exports = {
  title: `Global Forest Watch Components | ${version}`,
  theme: {
    color: {
      base: '#555',
      link: '#97BD3D',
      linkHover: '#658022',
      border: '#e5e5df',
      error: '#ed1846',
      baseBackground: '#fff',
      focus: 'transparent',
    },
    fontFamily: { base: '"Fira Sans", Arial, sans-serif' },
    fontSize: {
      base: 16,
      text: 16,
      small: 14,
      h1: 60,
      h2: 30,
      h3: 24,
      h4: 18,
      h5: 12,
    },
    mq: {
      small: '@media (max-width: 768px)',
    },
  },
  styles: {
    StyleGuide: { sidebar: { backgroundColor: '#ffffff', color: '#555' } },
    Logo: { logo: { color: '#97BD3D' } },
  },
  sections: [
    {
      name: 'Setup',
      content: 'src/docs/introduction.md',
      sections: [
        {
          name: 'Module',
          content: 'src/docs/module.md',
        },
        {
          name: 'Static',
          content: 'src/docs/static.md',
        },
        {
          name: 'i18n',
          content: 'src/docs/i18n.md',
        },
      ],
    },
    {
      name: 'Components',
      content: 'src/docs/components.md',
      components: 'src/components/*/index.js',
    },
    {
      name: 'Grid',
      content: 'src/docs/grid.md',
      components: 'src/components/grid/*/index.js',
    },
    {
      name: 'Emails',
      content: 'src/docs/grid.md',
      components: 'src/components/emails/*/index.js',
    },
    {
      name: 'Responsive',
      content: 'src/docs/responsive.md',
      components: 'src/components/responsive/*/index.js',
    },
    {
      name: 'Modals',
      content: 'src/docs/modals.md',
      components: 'src/components/modals/*/index.js',
    },
    {
      name: 'Form components',
      content: 'src/docs/form-components.md',
      components: 'src/components/forms/components/*/index.js',
    },
    {
      name: 'Forms',
      content: 'src/docs/forms.md',
      components: 'src/components/forms/*/index.js',
    },
    {
      name: 'HTML Components',
      content: 'src/docs/html.md',
      components: 'src/components/html/*/index.js',
    },
    {
      name: 'Icons',
      content: 'src/docs/icons.md',
    },
  ],
  template: {
    favicon: '/favicon.ico',
    head: {
      links: [
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&display=swap',
        },
      ],
    },
  },
  assetsDir: 'public',
  components: 'src/components/**/index.js',
  skipComponentsWithoutExample: true,
  getComponentPathLine: (componentPath) => {
    const dirname = path.dirname(componentPath, '.js');
    const componentName = camelCase(dirname.split('/').slice(-1)[0]);

    return `import { ${upperFirst(componentName)} } from 'gfw-components';`;
  },
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/styleguide/wrapper'),
    Logo: path.join(__dirname, 'src/styleguide/logo'),
  },
  require: ['@babel/polyfill'],
  webpackConfig,
};
