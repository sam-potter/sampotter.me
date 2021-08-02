const title = 'Sam Potter';
const description = "Hey, I'm Sam Potter, a 20 year old engineer from Melbourne, Australia.";

const config = {
  title,
  description,
  canonical: 'https://sampotter.me',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://sampotter.me',
    title,
    description,
  },
  twitter: {
    handle: '@saampotter_',
    site: '@saampotter_',
    cardType: 'summary_large_image',
  },
};

export default config;
