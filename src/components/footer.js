const Footer = () => (
  <div className="flex justify-end space-x-4">
    <Link href="https://github.com/saampotter">GitHub</Link>
    <Link href="https://twitter.com/saampotter_">Twitter</Link>
    <Link href="https://medium.com/@sampotter_">Medium</Link>
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

export default Footer;
