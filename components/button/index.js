import React from "react";
import theme from "../theme";

const Button = React.forwardRef(({ onClick, href, children }, ref) => (
  <a href={href} onClick={onClick} ref={ref}>
    {children}
    <style jsx>
      {`
        a {
          display: inline-block;
          width: 213px;
          height: 44px;
          background-color: ${theme.colors.blue};
          box-shadow: 0 4px 14px rgba(0, 18, 255, 0.39);
          border-radius: 7px;
          color: #fff;
          text-align: center;
          line-height: 44px;
          cursor: pointer;
          transition: all 200ms ease;
        }
        a:hover {
          background: rgba(0, 118, 255, 0.9);
          box-shadow: 0 6px 20px rgba(0, 118, 255, 0.23);
        }
      `}
    </style>
  </a>
));

export default Button;
