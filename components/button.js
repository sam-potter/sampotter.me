import Link from "next/link";
import classNames from "classnames";
import css from "styled-jsx/css";

import withPure from "./hoc/pure";

const cachedStyles = css`
  .btn {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-decoration: none;
    padding: 0.25rem 0.5rem;
    margin: -0.25rem -0.5rem;
    border-radius: 7px;
    color: #0070f3;
    background-color: transparent;
    border: none;
    font-size: inherit;
    line-height: inherit;
    transition: background 0.2s ease, color 0.2s ease, box-shadow 0.2s;
    outline: none;
  }
  .btn:hover {
    color: #0070f3;
    background: rgba(0, 118, 255, 0.1);
  }
  .btn.error {
    color: #ff3b30;
  }
  .btn.error:hover {
    background: rgba(255, 59, 48, 0.1);
  }
  .btn.primary,
  .btn.secondary {
    margin: 0;
    padding: 0 2.875rem;
    height: 2.81rem;
    line-height: 2.8rem;
    border-radius: 7px;
  }
  .btn.primary {
    background-color: #0070f3;
    box-shadow: 0 4px 14px 0 rgba(0, 118, 255, 0.39);
    color: white;
  }
  .btn.primary:hover {
    background: rgb(0, 118, 255);
    box-shadow: 0 6px 20px rgba(0, 118, 255, 0.23);
  }
  .btn.primary:active {
    background: #006ae6;
  }
  .btn.secondary {
    background-color: #ffffff;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
    color: #0070f3;
  }
  .btn.secondary:hover {
    box-shadow: 0 7px 15px rgba(0, 0, 0, 0.12);
  }
  .btn.small {
    font-size: 0.875rem;
    height: 1.5rem;
    padding: 0 0.75rem;
    line-height: inherit;
    border-radius: 5px;
  }
`;

export default withPure(function Button({
  children,
  primary,
  secondary,
  small,
  error,
  href,
  as,
  className,
  onClick,
  amp,
  ...props
}) {
  const cachedClassNames = classNames(className, "btn", "fw4 no-drag", {
    primary,
    secondary,
    small,
    error
  });

  if (href) {
    const isExternal = href && href.startsWith("http");
    const a = (
      <a className={cachedClassNames} href={href} {...props}>
        {children}
        <style jsx>{cachedStyles}</style>
      </a>
    );

    return amp || isExternal ? (
      a
    ) : (
      <Link href={href} as={as}>
        {a}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={cachedClassNames}
      onClick={onClick}
      {...props}
    >
      <span className="text">{children}</span>
      <style jsx>{cachedStyles}</style>
    </button>
  );
});
