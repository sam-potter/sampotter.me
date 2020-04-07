export default function Container({
  dark,
  gray,
  white,
  wide,
  small,
  overflow,
  minHeight,
  children,
  divider,
  ...props
}) {
  return (
    <div {...props}>
      <style jsx>
        {`
      {
        width: 100%;
        margin: 0 auto;
        padding: 0 ${wide ? "0" : "1.25rem"};
        ${wide && !small ? "" : "max-width: 1060px;"}
        ${small ? "max-width: 682px;" : ""}
        ${dark ? "background: #111;" : ""}
        ${dark ? "color: #f1f1f1;" : ""}
        ${gray ? "background-color: #fafafa;" : ""}
        ${white ? "background-color: #ffffff;" : ""}
        ${wide && !overflow ? "overflow: hidden;" : ""}
        ${minHeight ? `min-height: ${minHeight}px;` : ""}
        ${divider ? `border-bottom: 1px solid #eaeaea;` : ""}
      }
      :after {
        // BFC
        content: '';
        display: table;
        clear: both;
      }
      // First media query breakpoint
      @media screen and (max-width: 1100px) {
        div {
          ${wide ? "" : "max-width: 816px;"}
        }
      }
      // Second media query breakpoint
      @media screen and (max-width: 816px) {
        div {
          ${wide ? "" : "max-width: 510px;"}
        }
      }
    `}
      </style>
      {children}
    </div>
  );
}
