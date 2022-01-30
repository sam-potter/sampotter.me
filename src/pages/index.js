import Head from 'next/head';
import Name from '@/components/name';
import Link from '@/components/link';
import Container from '@/components/container';

export default function Index() {
  return (
    <>
      <Head>
        <title>Sam Potter</title>
        <meta
          name="description"
          content="Hey, I'm Sam Potter, a 20 year old engineer from Melbourne. Currently building univo. You can find me on GitHub or Twitter."
        />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Sam Potter" />
        <meta name="twitter:site" content="@sampotter___" />
        <meta name="twitter:creator" content="@sampotter___" />
        <meta name="twitter:image" content="https://sampotter.me/images/og.png" />
        <meta
          name="twitter:description"
          content="Hey, I'm Sam Potter, a 20 year old engineer from Melbourne. Currently building univo. You can find me on GitHub or Twitter."
        />

        <meta property="og:title" content="Sam Potter" />
        <meta property="og:url" content="https://sampotter.me" />
        <meta property="og:image" content="https://sampotter.me/images/og.png" />
        <meta
          property="og:description"
          content="Hey, I'm Sam Potter, a 20 year old engineer from Melbourne. Currently building univo. You can find me on GitHub or Twitter."
        />
      </Head>

      <div className="mt-32">
        <Container>
          <Name />

          <p className="max-w-screen-sm mt-6 text-gray-700 text-md md:text-lg">
            Hey, I&apos;m Sam, a 20 year old engineer from Melbourne. Currently building&nbsp;
            <Link href="https://univo.app/">univo</Link>. You can find me on&nbsp;
            <Link href="https://github.com/sam-potter">GitHub</Link>, or&nbsp;
            <Link href="https://twitter.com/sampotter___">Twitter</Link>.
          </p>

          <div className="mt-8 border-b" />

          <div className="mt-8 -mx-4">
            <Article
              date="11 Oct 2021"
              title="A primer on reducing initial page load times"
              href="/tech/a-primer-on-reducing-initial-page-load-times"
            />
            {/* <Article
              date="4 Oct 2021"
              title="If someone asks what an NFT is, say this"
              href="/tech/if-someone-asks-what-an-nft-is-say-this"
            /> */}
            <Article
              date="15 Feb 2021"
              title="How not to do layouts in Next.js"
              href="/tech/how-not-to-do-layouts-in-nextjs"
            />
            <Article
              date="11 Jan 2020"
              title="How Podac loads images 95x faster"
              href="https://medium.com/swlh/how-podac-loads-images-95x-faster-f1d6063590c2"
            />
          </div>
        </Container>
      </div>
    </>
  );
}

const Article = ({ title, href, date }) => (
  <Link href={href}>
    <div className="px-4 pt-3 pb-1 sm:rounded-md hover:bg-gray-100 group">
      <p className="text-xs text-gray-400 md:text-sm">{date}</p>
      <p className="mt-1 mb-2 text-md md:text-lg">{title}</p>
    </div>
  </Link>
);
