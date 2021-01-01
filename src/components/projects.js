import Image from 'next/image';
import Tag from '@/components/tag';

export default function Projects() {
  return (
    <div className="space-y-4">
      <p className="text-3xl font-bold text-white">Projects</p>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Project
          color="#6851FF"
          title="sporting.land"
          tags={['React', 'Next.js']}
          href="https://sporting.land/"
        >
          A booking system helping local sporting venues transition to online bookings post COVID.
        </Project>
        <Project
          color="#b10932"
          tags={['Design']}
          href="https://www.oscanet.com.au/"
          title="Old Scotch Collegians Association"
          imageProps={{ width: 400, height: 160, src: '/images/osca.png', alt: '', priority: true }}
        >
          Website consultation, and full re-design I did for Scotch College's alumni association.
        </Project>
      </div>
    </div>
  );
}

const Project = ({ title, href, color, imageProps, tags = [], children }) => (
  <div>
    <div
      className="flex items-center justify-center w-full h-32 rounded-lg"
      style={{ background: color }}
    >
      {imageProps && (
        <div className="w-48">
          <Image {...imageProps} className="rounded-lg" />
        </div>
      )}
    </div>
    <div className="mt-4">
      <p className="mb-1 text-lg font-semibold dark:text-white">{title}</p>
      <div className="mb-3 text-gray-600 dark:text-gray-400">{children}</div>
      <div className="flex items-center justify-between pt-2">
        <div>
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2 py-1 mr-2 text-sm font-medium bg-gray-100 rounded dark:bg-gray-800 dark:text-gray-300"
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
  </div>
);
