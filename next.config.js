const visit = require('unist-util-visit');
const rehypePrism = require('@mapbox/rehype-prism');
const { createLoader } = require('simple-functional-loader');

const tokenClassNames = {
  tag: 'text-code-red',
  deleted: 'text-code-red',
  boolean: 'text-code-red',
  string: 'text-code-green',
  function: 'text-code-blue',
  keyword: 'text-code-purple',
  inserted: 'text-code-green',
  punctuation: 'text-code-white',
  comment: 'text-gray-400 italic',
  'attr-name': 'text-code-yellow',
  'attr-value': 'text-code-green',
};

module.exports = {
  exportTrailingSlash: true,
  pageExtensions: ['js', 'jsx', 'mdx'],
  images: {
    loader: 'imgix',
    path: 'https://sampotter.imgix.net/',
  },
  rewrites() {
    return [
      {
        source: '/bee.js',
        destination: 'https://cdn.splitbee.io/sb.js',
      },
      {
        source: '/_hive/:slug',
        destination: 'https://hive.splitbee.io/:slug',
      },
    ];
  },
  headers() {
    return [
      {
        source: '/fonts/inter-var-latin.woff2',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
    ];
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.mdx$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: '@mdx-js/loader',
          options: {
            rehypePlugins: [
              rehypePrism,
              () => {
                return tree => {
                  visit(tree, 'element', node => {
                    let [token, type] = node.properties.className || [];

                    if (token === 'token') node.properties.className = [tokenClassNames[type]];
                  });
                };
              },
            ],
          },
        },
        createLoader(function (src) {
          const c = ['import Post from "@/components/post"', src, 'export default Post'].join('\n');

          return this.callback(null, c);
        }),
      ],
    });

    // Replace React with Preact only in client production build
    if (!options.dev && !options.isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom': 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
      });
    }

    return config;
  },
};
