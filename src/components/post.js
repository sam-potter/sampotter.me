import Head from 'next/head';
import tinytime from 'tinytime';
import { MDXProvider } from '@mdx-js/react';
import Container from '@/components/container';
import Link from '@/components/link';

export const mdxComponents = {
  pre: ({ className, ...props }) => (
    <pre className={`${className} rounded-md bg-gray-800 py-3 px-4 overflow-x-auto`} {...props} />
  ),
  'pre.code': ({ className, ...props }) => (
    <code className={`${className} text-gray-200`} {...props} />
  ),
  a: props => <Link {...props} className="font-normal" />,
};

const postDateTemplate = tinytime('{MM} {DD}, {YYYY}');

export default function Post({ meta, children }) {
  return (
    <Container className="py-32">
      <Head>
        <title>{meta.title} – Sam Potter</title>
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
          <div className="pt-10 pb-8 prose max-w-none">
            <MDXProvider components={mdxComponents}>{children}</MDXProvider>
          </div>
        </div>
      </article>
    </Container>
  );
}
