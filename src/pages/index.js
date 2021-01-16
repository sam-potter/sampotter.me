import Motto from '@/components/motto';
import Projects from '@/components/projects';
import Articles from '@/components/articles';
import Footer from '@/components/footer';

export default function Index() {
  return (
    <div className="max-w-5xl px-4 py-32 mx-auto space-y-32">
      <div>
        <Motto />
        <About />
      </div>
      <Projects />
      <Articles />
      <Footer />
    </div>
  );
}

const About = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2">
    <div className="space-y-4 text-xl dark:text-gray-100">
      <h2>Hey there 👋</h2>
      <h2>
        I'm Sam. I'm a developer from Melbourne in love with building{' '}
        <span className="line-through">good shit</span> performant, scalable, and maintable apps on
        the web.
      </h2>
    </div>
  </div>
);
