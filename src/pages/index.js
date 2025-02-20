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
          content="Hey, I'm Sam Potter, a 23 year old engineer from Melbourne."
        />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Sam Potter" />
        <meta name="twitter:site" content="@sampotter___" />
        <meta name="twitter:creator" content="@sampotter___" />
        <meta name="twitter:image" content="https://sampotter.me/images/og.png" />
        <meta
          name="twitter:description"
          content="Hey, I'm Sam Potter, a 23 year old engineer from Melbourne."
        />

        <meta property="og:title" content="Sam Potter" />
        <meta property="og:url" content="https://sampotter.me" />
        <meta property="og:image" content="https://sampotter.me/images/og.png" />
        <meta
          property="og:description"
          content="Hey, I'm Sam Potter, a 23 year old engineer from Melbourne."
        />
      </Head>

      <div className="mt-32">
        <Container>
          <Name />

          <p className="max-w-screen-sm mt-6 text-gray-700 text-md md:text-lg">
            Hey, I&apos;m Sam, a 23 year old engineer from Melbourne. You can find me on&nbsp;
            <Link href="https://github.com/sam-potter">GitHub</Link>, or&nbsp;
            <Link href="https://twitter.com/sampotter___">Twitter</Link>.
          </p>

          <div className="mt-8 border-b" />

          <div className="mt-8 -mx-4">
            <Article
              date="23 Aug 2024" //
              title="Interface design"
              href="/interface-design"
            />

            <Article
              date="23 Jan 2024"
              title="React Server Components"
              href="/tech/react-server-components"
            />

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
