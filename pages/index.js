import Name from 'components/name';
import Articles from 'components/articles';

export default function Index() {
  return (
    <>
      <div className="py-32 app-container">
        <Name />
        <About />
      </div>

      <Articles />
    </>
  );
}

const About = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2">
    <div className="space-y-4 text-xl dark:text-gray-100">
      <h2>Hey there 👋</h2>
      <h2>I'm Sam. I'm a developer from Melbourne, Aus, trying to build good shit that matters.</h2>
      <h2>
        Find me on
        <Link href="https://github.com/saampotter">GitHub</Link>,
        <Link href="https://twitter.com/saampotter_">Twitter</Link>, or
        <Link href="https://medium.com/@sampotter_">Medium</Link>.
      </h2>
    </div>
  </div>
);

const Link = ({ href, children }) => (
  <a
    href={href}
    rel="noopener"
    target="_blank"
    className="inline-block ml-1 text-blue-500 hover:text-blue-600"
  >
    {children}
  </a>
);
