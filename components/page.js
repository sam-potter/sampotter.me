import Head from "next/head";

export default function Page({ title, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta property="og:site_name" content={title} />
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content={
            description ||
            "My name’s Sam Potter, I’m a full-stack web developer from Melbourne, Australia. I build websites and tech solutions for individuals, businesses, and startups."
          }
        />
        <meta
          name="description"
          content={
            description ||
            "My name’s Sam Potter, I’m a full-stack web developer from Melbourne, Australia. I build websites and tech solutions for individuals, businesses, and startups."
          }
        />
        <meta
          name="keywords"
          content="Sam Potter Web Developer, Melbourne Developer, Website Builder Melbourne, Sam Potter, Sam Potter Melbourne, Sam Potter Developer, Sam Potter Melbourne"
        />
      </Head>
      {children}
      <style jsx global>
        {`
          html {
            line-height: 1.15;
            -webkit-text-size-adjust: 100%;
            height: 100%;
            box-sizing: border-box;
          }
          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }
          body {
            position: relative;
            min-height: 100%;
            margin: 0;
            line-height: 1.65;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
              "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
              "Helvetica Neue", sans-serif;
            font-size: 16px;
            font-weight: 400;
            min-width: 320px;
            direction: ltr;
            font-feature-settings: "kern";
            text-rendering: optimizeLegibility;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            scroll-behavior: smooth;
          }
          html,
          body {
            background-color: var(--background);
            color: var(--text-primary);
          }
          h1,
          h2,
          h3 {
            margin: 0;
          }
          a {
            color: var(--primary);
            text-decoration: none;
          }
          a[target="_blank"]:after {
            background: url("/static/icons/external-link.svg") 100% / contain
              no-repeat;
            content: "";
            position: relative;
            top: 1px;
            margin: 0 0.15rem;
            padding-right: 0.65rem;
          }
          a[target="_blank"]:hover {
            text-decoration: underline;
          }
          .f-reset {
            font-size: 1rem;
          }
          .f0 {
            font-size: 1.802032470703125em;
          }
          .f1 {
            font-size: 1.601806640625em;
          }
          .f2 {
            font-size: 1.423828125em;
          }
          .f3 {
            font-size: 1.265625em;
          }
          .f4 {
            font-size: 1.125em;
          }
          .f5 {
            font-size: 0.8888888888888888em;
          }
          .f6 {
            font-size: 0.7901234567901234em;
          }
          .fw1 {
            font-weight: 100;
          }
          .fw2 {
            font-weight: 200;
          }
          .fw3 {
            font-weight: 300;
          }
          .fw4 {
            font-weight: 400;
          }
          .fw5 {
            font-weight: 500;
          }
          .fw6 {
            font-weight: 600;
          }
          .fw7 {
            font-weight: 700;
          }
          .fw8 {
            font-weight: 800;
          }
          .fw9 {
            font-weight: 900;
          }
          .subtitle {
            color: #696969;
          }
          .mute {
            color: #696969;
          }
          .row {
            display: flex;
            align-items: center;
            margin: 0 -1.5rem;
          }
          .column {
            flex: 1;
            padding: 0 1.5rem;
          }
          .display-none {
            display: none;
          }
          .display-mobile {
            display: none;
          }
          .display-tablet {
            display: none;
          }
          @media screen and (max-width: 1100px) {
            .display-tablet {
              display: unset;
            }
            .hide-tablet {
              display: none;
            }
          }
          @media screen and (max-width: 816px) {
            .display-mobile {
              display: unset;
            }
            .hide-mobile {
              display: none;
            }
          }
          a[role="button"] {
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            -khtml-user-select: none;
            user-select: none;
          }
          .no-tap-highlight,
          a {
            -webkit-touch-callout: none;
            -ms-touch-action: pan-y;
            touch-action: pan-y;
            -webkit-tap-highlight-color: transparent;
          }
          .no-tap-callout {
            -webkit-touch-callout: none;
          }
          svg {
            shape-rendering: crispEdges;
            text-rendering: optimizeLegibility;
          }
          svg path,
          svg circle {
            shape-rendering: geometricprecision;
          }
        `}
      </style>
    </div>
  );
}
