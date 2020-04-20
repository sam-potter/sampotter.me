import React from "react";

import Page from "../components/page-container";
import About from "../components/home/about";
import Works from "../components/home/works";

export default function Home() {
  return (
    <Page title="Sam Potter | Portfolio">
      <About />
      <Works />
    </Page>
  );
}
