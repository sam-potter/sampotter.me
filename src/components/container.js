export default function Container({ className, children }) {
  return <div className={`${className} max-w-3xl px-4 mx-auto`}>{children}</div>;
}
