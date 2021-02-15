import Container from '@/components/container';
import Link from '@/components/link';

export default function Articles() {
  return (
    <div className="bg-gray-100">
      <Container className="py-32 space-y-4">
        <p className="text-3xl font-bold">Writings</p>

        <div className="border-b border-gray-200" />

        <p className="text-lg text-gray-700">
          I often write articles when I've got no idea what I'm talking about, but it helps me
          refine what I'm learning. It also means what I say is easy for anyone to understand.
        </p>

        <div className="-mx-4">
          <Article
            date="Jan 11, 2020"
            href="/tech/how-not-to-do-layouts-in-nextjs"
            title="How not to do layouts in Next.js"
          />

          <Article
            date="Jan 11, 2020"
            href="https://medium.com/swlh/how-podac-loads-images-95x-faster-f1d6063590c2"
            title="How Podac loads images 95x faster"
          />
        </div>
      </Container>
    </div>
  );
}

const Article = ({ title, href, date }) => (
  <Link href={href}>
    <div className="px-4 pt-3 pb-1 sm:rounded-md hover:bg-gray-200 group">
      <p className="text-gray-400">{date}</p>
      <p className="mt-1 mb-2 text-lg font-semibold">{title}</p>
    </div>
  </Link>
);
