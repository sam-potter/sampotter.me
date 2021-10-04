const title = 'Sam Potter';
const description = "Hey, I'm Sam Potter, a 20 year old engineer from Melbourne, Australia.";

const config = {
  title,
  description,
  canonical: 'https://sampotter.me',
  twitter: {
    handle: '@saampotter_',
    site: '@saampotter_',
    cardType: 'summary_large_image',
  },
  openGraph: {
    title,
    description,
    type: 'website',
    locale: 'en_IE',
    url: 'https://sampotter.me',
    images: [
      {
        url: 'https://sampotter.me/images/og.png',
        width: 2048,
        height: 1024,
        alt: 'Sam Potter Homepage',
      },
    ],
  },
};

export default config;
