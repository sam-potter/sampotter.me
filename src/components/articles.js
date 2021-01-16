export default function Articles() {
  return (
    <div className="grid grid-cols-1 gap-6 px-4 pt-12 -mx-4 bg-gray-100 sm:py-24 sm:grid-cols-3">
      <div className="col-span-1 pb-8 space-y-4">
        <p className="text-3xl font-bold dark:text-white">Writings</p>
        <p className="text-gray-600 dark:text-gray-400">
          I try to write as I'm learning. So often, these articles are written just as I begin to
          truly understand a concept. Hopefully, this makes them easy to learn from.
        </p>
      </div>

      <div className="col-span-2 space-y-4">
        <Article
          date="Jan 11, 2020"
          href="https://medium.com/swlh/how-podac-loads-images-95x-faster-f1d6063590c2"
          title="How Podac loads images 95x faster"
          text="Podac was my first dive into the world of React. It's a Chrome extension that brought life to my 'new tab' page with beautiful background images. However, trying to fetch and load an image from the Unsplash API before making a search was no easy task. The article reveals how a few neat tricks allowed me to optimise image load times."
        />
      </div>
    </div>
  );
}

const Article = ({ title, text, href, date }) => (
  <div className="flex flex-col justify-between -mx-4 overflow-hidden bg-white shadow-md sm:rounded-md sm:mx-0 dark:bg-gray-800">
    <div className="p-4">
      <p className="mt-1 mb-2 text-lg font-bold dark:text-white">{title}</p>
      <p className="text-gray-600 dark:text-gray-400">{text}</p>
    </div>
    <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900">
      <p className="text-gray-600 dark:text-gray-400">{date}</p>

      <a
        href={href}
        rel="noopener"
        target="_blank"
        className="font-semibold text-indigo-500 hover:underline"
      >
        Read on Medium
      </a>
    </div>
  </div>
);
