export default function Articles() {
  return (
    <div className="space-y-4">
      <p className="text-3xl font-bold text-white">Writings</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <p className="text-gray-400">
          I try to write as I'm learning. So often, these articles are written just as I begin to
          truly understand a concept. Hopefully, this makes them easy to learn from.
        </p>

        <div className="col-span-2 space-y-4">
          <Article
            date="Jan 11, 2020"
            href="https://medium.com/swlh/how-podac-loads-images-95x-faster-f1d6063590c2"
            title="How Podac loads images 95x faster"
            text="Podac was my first dive into the world of React. It's a Chrome extension that brought life to my 'new tab' page with beautiful background images. However, fetching and loading an image from the Unsplash API before making a search was no easy task. The article reveals how a few neat tricks allowed me to optimise image load times."
          />
        </div>
      </div>
    </div>
  );
}

const Article = ({ title, text, href, date }) => (
  <div className="flex flex-col justify-between">
    <div>
      <p className="text-gray-400 mb-1">{date}</p>
      <p className="text-white text-lg font-bold mb-2">{title}</p>
      <p className="text-gray-400">{text}</p>
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
