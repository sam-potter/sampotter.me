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
  pageExtensions: ['js', 'jsx', 'mdx'],
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

    return config;
  },
};
