import Image from 'next/image';

export default function Projects() {
  return (
    <>
      <p className="mt-24 mb-3 text-3xl font-bold text-white">Projects</p>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Project
          color="#6851FF"
          title="sporting.land"
          tags={['React', 'Next.js']}
          href="https://sporting.land/"
        >
          <span className="text-gray-400">
            A booking system helping local sporting venues transition to online bookings post COVID.
          </span>
        </Project>
        <Project
          color="#b10932"
          tags={['Design']}
          href="https://www.oscanet.com.au/"
          title="Old Scotch Collegians Association"
          imageProps={{ width: 400, height: 160, src: '/images/osca.png', alt: '' }}
        >
          <span className="text-gray-400">
            Website consultation, and a full re-design I did for the Old Boys alumni website of
            OSCA.
          </span>
        </Project>
      </div>
    </>
  );
}

const Project = ({ title, href, color, imageProps, tags = [], children }) => (
  <div>
    <div
      className="rounded-lg h-32 w-full flex items-center justify-center"
      style={{ background: color }}
    >
      {imageProps && (
        <div className="w-48">
          <Image {...imageProps} className="rounded-lg" />
        </div>
      )}
    </div>
    <p className="mt-3 text-lg font-semibold text-white">{title}</p>
    <div className="my-3">{children}</div>
    <div className="flex items-center justify-between">
      <div>
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-flex items-center px-2 py-0.5 rounded text-sm font-medium leading-4 bg-gray-100 text-gray-800 mr-2"
          >
            {tag}
          </span>
        ))}
      </div>
      <a
        rel="noopener"
        target="_blank"
        href={href}
        className="font-semibold text-indigo-500 hover:underline"
      >
        View Site
      </a>
    </div>
  </div>
);
