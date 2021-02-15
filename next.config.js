const visit = require('unist-util-visit');
const rehypePrism = require('@mapbox/rehype-prism');
const { createLoader } = require('simple-functional-loader');

const tokenClassNames = {
  tag: 'text-code-red',
  'attr-name': 'text-code-yellow',
  'attr-value': 'text-code-green',
  deleted: 'text-code-red',
  inserted: 'text-code-green',
  punctuation: 'text-code-white',
  keyword: 'text-code-purple',
  string: 'text-code-green',
  function: 'text-code-blue',
  boolean: 'text-code-red',
  comment: 'text-gray-400 italic',
};

module.exports = {
  pageExtensions: ['js', 'jsx', 'mdx'],
  async rewrites() {
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
  webpack: (config, options) => {
    const mdx = [
      options.defaultLoaders.babel,
      {
        loader: '@mdx-js/loader',
        options: {
          rehypePlugins: [
            rehypePrism,
            () => {
              return tree => {
                visit(tree, 'element', (node, index, parent) => {
                  let [token, type] = node.properties.className || [];
                  if (token === 'token') {
                    node.properties.className = [tokenClassNames[type]];
                  }
                });
              };
            },
          ],
        },
      },
    ];

    config.module.rules.push({
      test: /\.mdx$/,
      use: [
        ...mdx,
        createLoader(function (src) {
          const content = [
            'import Post from "@/components/post"',
            '// export { getStaticProps } from "@/getStaticProps"',
            src,
            'export default Post',
          ].join('\n');

          return this.callback(null, content);
        }),
      ],
    });

    // Replace React with Preact only in client production build
    if (!options.dev && !options.isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      });
    }

    return config;
  },
};
