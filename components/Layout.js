import React from "react";
import { Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import Header from "./Header";

//disable ssr for walletconnect
import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR = dynamic(() => import("../src/App.tsx"), {
  ssr: false,
});

const Layout = (props) => {
  return (
    <Container>
      <DynamicComponentWithNoSSR />
      <Header />
      {props.children}
    </Container>
  );
};

export default Layout;
