const path = require('path');
const camelCase = require('lodash/camelCase');
const upperFirst = require('lodash/upperFirst');

const webpackConfig = require('./styleguide.webpack.js');
const { version } = require('./package.json');

module.exports = {
  title: `GFW components | ${version}`,
  theme: {
    color: {
      link: '#97BD3D',
      linkHover: '#97BD3D'
    }
  },
  styles: {
    StyleGuide: {
      sidebar: {
        backgroundColor: '#333333',
        color: '#97BD3D'
      }
    },
    Logo: {
      logo: {
        color: '#97BD3D'
      }
    }
  },
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&display=swap'
        }
      ]
    }
  },
  skipComponentsWithoutExample: true,
  getComponentPathLine: componentPath => {
    const dirname = path.dirname(componentPath, '.js');
    const componentName = camelCase(dirname.split('/').slice(-1)[0]);

    return `import { ${upperFirst(componentName)} } from 'gfw-components';`;
  },
  webpackConfig
};