const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')([
  '@architecture/design-system', 
  '@architecture/utils'
]);

/**
 * @type {import('next').NextConfig}
 */
module.exports = withPlugins([withTM], {
  trailingSlash: true
});
