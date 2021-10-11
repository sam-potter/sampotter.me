import Head from 'next/head';
import tinytime from 'tinytime';
import Link from '@/components/link';
import { useRouter } from 'next/router';
import { MDXProvider } from '@mdx-js/react';
import Container from '@/components/container';

const components = { a: Link };
const postDateTemplate = tinytime('{MM} {DD}, {YYYY}');

export default function Post({ meta, children }) {
  const router = useRouter();

  return (
    <div className="my-32">
      <Container>
        <Head>
          <title>{meta.title} - Sam Potter</title>
          <meta name="description" content={meta.description}></meta>

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content={meta.title} />
          <meta name="twitter:site" content="@saampotter_" />
          <meta name="twitter:creator" content="@saampotter_" />
          <meta name="twitter:description" content={meta.description} />
          <meta name="twitter:image" content={meta.image ?? 'https://sampotter.me/images/og.png'} />

          <meta property="og:type" content="article" />
          <meta property="og:title" content={meta.title} />
          <meta property="og:description" content={meta.description} />
          <meta property="og:image" content={meta.image ?? 'https://sampotter.me/images/og.png'} />
          <meta property="og:url" content={`https://sampotter.me${router.pathname}`} />
        </Head>
        <article>
          <header>
            <div className="pb-4 border-b border-gray-200">
              <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                {meta.title}
              </h1>
            </div>
            <div className="flex items-center justify-between pt-2 text-sm">
              <time className="text-gray-700" dateTime={meta.date}>
                {postDateTemplate.render(new Date(meta.date))}
              </time>
              <Link href="/">See all posts</Link>
            </div>
          </header>
          <div className="divide-y divide-gray-200 xl:pb-0 xl:col-span-3 xl:row-span-2">
            <div className="pt-10 pb-8 prose-sm prose md:prose max-w-none">
              <MDXProvider components={components}>{children}</MDXProvider>
            </div>
          </div>
        </article>
      </Container>
    </div>
  );
}
