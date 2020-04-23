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
    color: var(--primary);
    background-color: transparent;
    border: none;
    font-size: inherit;
    line-height: inherit;
    transition: background 200ms ease, color 200ms ease, box-shadow 200ms,
      transform 200ms ease;
    outline: none;
  }
  .btn:hover {
    background: rgba(0, 118, 255, 0.1);
  }
  .btn.primary,
  .btn.secondary {
    margin: 0;
    padding: 0 25px;
    height: 50px;
    min-width: 200px;
    border-radius: 7px;
    box-shadow: var(--shadow-small);
  }
  .btn.primary:hover,
  .btn.secondary:hover {
    transform: translate3d(0, -1px, 0);
    box-shadow: var(--shadow-medium);
  }
  .btn.primary {
    background-color: var(--primary);
    color: #fff;
  }
  .btn.secondary {
    background-color: #ffffff;
    color: var(--primary);
  }
  .btn.disabled {
    color: var(--text-muted);
    cursor: not-allowed;
  }
  .btn.disabled:hover {
    background-color: transparent;
  }
`;

export default withPure(function Button({
  children,
  primary,
  secondary,
  disabled,
  href,
  as,
  className,
  onClick,
  isExternal,
  ...props
}) {
  const cachedClassNames = classNames(className, "btn", "fw4 no-drag", {
    primary,
    secondary,
    disabled,
  });

  if (href) {
    const a = (
      <a className={cachedClassNames} href={href} {...props}>
        {children}
        <style jsx>{cachedStyles}</style>
      </a>
    );

    return isExternal ? (
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
