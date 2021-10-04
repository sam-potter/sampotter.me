import Name from '@/components/name';
import Link from '@/components/link';
import Container from '@/components/container';

export default function Index() {
  return (
    <div className="mt-32">
      <Container>
        <Name />

        <p className="max-w-screen-sm mt-6 text-lg text-gray-700">
          Hey, I&apos;m Sam, a 20 year old engineer from Melbourne. Currently building&nbsp;
          <Link href="https://univo.app/">univo</Link>. You can find me on&nbsp;
          <Link href="https://github.com/saampotter">GitHub</Link>, or&nbsp;
          <Link href="https://twitter.com/saampotter_">Twitter</Link>.
        </p>

        <div className="mt-8 border-b" />

        <div className="mt-8 -mx-4">
          <Article
            date="Oct 4, 2021"
            title="If someone asks what an NFT is, say this"
            href="/tech/if-someone-asks-what-an-nft-is-say-this"
          />
          <Article
            date="Feb 15, 2021"
            title="How not to do layouts in Next.js"
            href="/tech/how-not-to-do-layouts-in-nextjs"
          />
          <Article
            date="Jan 11, 2020"
            title="How Podac loads images 95x faster"
            href="https://medium.com/swlh/how-podac-loads-images-95x-faster-f1d6063590c2"
          />
        </div>
      </Container>
    </div>
  );
}

const Article = ({ title, href, date }) => (
  <Link href={href}>
    <div className="px-4 pt-3 pb-1 sm:rounded-md hover:bg-gray-100 group">
      <p className="text-sm text-gray-400">{date}</p>
      <p className="mt-1 mb-2 text-lg">{title}</p>
    </div>
  </Link>
);
