import Motto from '@/components/motto';
import Projects from '@/components/projects';
import Articles from '@/components/articles';
import Footer from '@/components/footer';

export default function Index() {
  return (
    <div className="container px-4 py-32 mx-auto space-y-32">
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
        My name's Sam Potter. I'm a 19 year old web developer from Melbourne, Australia. To sum me
        up in 3 words, read the colourful sentence above one more time.
      </h2>
    </div>
  </div>
);
