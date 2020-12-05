import Name from '@/components/name';
import Projects from '@/components/projects';
import Articles from '@/components/articles';
import Footer from '@/components/footer';

export default function Index() {
  return (
    <div className="container mx-auto px-4 my-24">
      <Name />
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <p className="text-xl text-gray-500">
          I'm a 19 year old developer from Melbourne building great (hopefully) products on the web.
        </p>
      </div>
      <Projects />
      <Articles />
      <Footer />
    </div>
  );
}
