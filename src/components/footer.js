import { useTheme } from 'next-themes';

const Footer = () => (
  <div className="flex items-center justify-between">
    <Toggle />

    <div className="space-x-4">
      <Link href="https://github.com/saampotter">GitHub</Link>
      <Link href="https://twitter.com/saampotter_">Twitter</Link>
      <Link href="https://medium.com/@sampotter_">Medium</Link>
    </div>
  </div>
);

const Link = ({ href, children }) => (
  <a
    href={href}
    rel="noopener"
    target="_blank"
    className="text-indigo-500 hover:underline font-medium"
  >
    {children}
  </a>
);

const Toggle = () => {
  const { theme, setTheme } = useTheme();
  const isLight = theme === 'light';

  return (
    <button
      className="p-4 pl-0 cursor-pointer focus:outline-none"
      onClick={() => setTheme(isLight ? 'dark' : 'light')}
    >
      {isLight ? '🌑' : '☀️'}
    </button>
  );
};

export default Footer;
