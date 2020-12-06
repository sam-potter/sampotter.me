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

export default function Footer() {
  return (
    <div className="flex justify-between">
      <p className="text-gray-400">Get in touch →</p>
      <div className="space-x-4">
        <Link href="https://github.com/saampotter">GitHub</Link>
        <Link href="mailto:sam.potter@hotmail.com">Email</Link>
        <Link href="https://twitter.com/saampotter_">Twitter</Link>
        <Link href="https://medium.com/@sampotter_">Medium</Link>
      </div>
    </div>
  );
}
