import { default as NextLink } from 'next/link';

export default function Link({ href, className, children }) {
  const isExternal = href.startsWith('http');
  const _className = `${className} text-blue-500 hover:text-blue-600 group-hover:text-blue-600 font-normal`;

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        className={_className}
        rel="noopener noreferrer"
        style={{ WebkitTapHighlightColor: 'transparent' }}
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href} passHref>
      <a style={{ WebkitTapHighlightColor: 'transparent' }} className={_className}>
        {children}
      </a>
    </NextLink>
  );
}
