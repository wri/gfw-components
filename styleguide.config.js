const path = require('path');
const camelCase = require('lodash/camelCase');
const upperFirst = require('lodash/upperFirst');

const webpackConfig = require('./styleguide.webpack.js');
const { version } = require('./package.json');

module.exports = {
  title: `Global Forest Watch Components | ${version}`,
  theme: {
    color: {
      base: '#555',
      link: '#97BD3D',
      linkHover: '#97BD3D',
      border: '#e5e5df',
      error: '#ed1846',
      baseBackground: '#fff',
      focus: 'transparent'
    },
    fontFamily: { base: '"Fira Sans", Arial, sans-serif' },
    fontSize: {
      base: 16,
      text: 16,
      small: 14,
      h1: 60,
      h2: 48,
      h3: 36,
      h4: 18,
      h5: 12
    }
  },
  styles: {
    StyleGuide: { sidebar: { backgroundColor: '#ffffff', color: '#555' } },
    Logo: { logo: { color: '#97BD3D' } }
  },
  template: {
    favicon: '/public/favicon.ico',
    head: {
      scripts: [
        {
          type: 'text/javascript',
          src: '//cdn.transifex.com/live.js',
          rel: 'preconnect'
        },
        {
          type: 'text/javascript',
          src: 'public/transifex.js',
          rel: 'preconnect'
        }
      ],
      links: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&display=swap'
        }
      ]
    }
  },
  components: 'src/components/**/index.js',
  skipComponentsWithoutExample: true,
  getComponentPathLine: componentPath => {
    const dirname = path.dirname(componentPath, '.js');
    const componentName = camelCase(dirname.split('/').slice(-1)[0]);

    return `import { ${upperFirst(componentName)} } from 'gfw-components';`;
  },
  styleguideComponents: { Logo: path.join(__dirname, 'src/styleguide/logo') },
  webpackConfig
};
