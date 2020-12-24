import { useTheme } from 'next-themes';

const Footer = () => (
  <div className="flex justify-between">
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
    className="text-gray-400 hover:underline font-medium"
  >
    {children}
  </a>
);

const Toggle = () => {
  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    // TODO: play sound
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="bg-indigo-500 text-white">
      <button onClick={handleClick} className="block">
        Toggle
      </button>
    </div>
  );
};

export default Footer;
