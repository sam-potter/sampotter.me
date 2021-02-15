import { default as NextLink } from 'next/link';

export default function Link({ href, className = '', children }) {
  const isExternal = href.startsWith('http');

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ WebkitTapHighlightColor: 'transparent' }}
        className={`${className} text-blue-500 hover:text-blue-600 group-hover:text-blue-600`}
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href} passHref>
      <a
        style={{ WebkitTapHighlightColor: 'transparent' }}
        className={`${className} text-blue-500 hover:text-blue-600 group-hover:text-blue-600`}
      >
        {children}
      </a>
    </NextLink>
  );
}
