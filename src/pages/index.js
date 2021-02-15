import Name from '@/components/name';
import Articles from '@/components/articles';
import Container from '@/components/container';
import Link from '@/components/link';

export default function Index() {
  return (
    <>
      <Container className="py-32">
        <Name />
        <About />
      </Container>

      <Articles />
    </>
  );
}

const About = () => (
  <div className="sm:grid sm:grid-cols-3">
    <div className="col-span-2 space-y-4 text-xl dark:text-gray-100">
      <h2>Hey there 👋</h2>
      <h2>I'm Sam. I'm a 19 year old developer from Melbourne building good shit.</h2>
      <h2>
        Find me on
        <Link href="https://github.com/saampotter" className="ml-1">
          GitHub
        </Link>
        ,
        <Link href="https://twitter.com/saampotter_" className="ml-1">
          Twitter
        </Link>
        .
      </h2>
    </div>
  </div>
);
