export default function Articles() {
  return (
    <>
      <p className="mt-24 text-3xl font-bold text-white">Articles</p>
      <hr className="mt-3 mb-4 border-gray-700" />
      <div className="grid sm:grid-cols-3 gap-6 mb-24">
        <Article
          date="Jan 11, 2020"
          href="https://medium.com/swlh/how-podac-loads-images-95x-faster-f1d6063590c2"
          title="How Podac loads images 95x faster"
          text="Podac was my first dive into the world of React. It's a Chrome extension that brought life to my 'new tab' page with beautiful background images. However, fetching and loading an image from the Unsplash API before making a search was no easy task. The article reveals how a few neat tricks allowed me to optimise image load times."
        />
      </div>
    </>
  );
}

const Article = ({ title, text, href, date }) => (
  <div className="flex flex-col justify-between">
    <div>
      <p className="text-gray-400 mb-1">{date}</p>
      <p className="text-white text-lg font-bold mb-3">{title}</p>
      <p className="text-gray-400 mb-3">{text}</p>
    </div>
    <div className="flex justify-end">
      <a
        href={href}
        rel="noopener"
        target="_blank"
        className="font-semibold text-indigo-500 hover:underline"
      >
        Read full article
      </a>
    </div>
  </div>
);
