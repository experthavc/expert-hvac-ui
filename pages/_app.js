import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme";
import "../styles/globals.css";
import TawkTo from "tawkto-react";
import { useEffect } from "react";

export default function MyApp(props) {
  const { Component, pageProps } = props;

  useEffect(() => {}, []);

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Expert HVAC Solutions</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="shortcut icon" href="/images/tdot-dark.png" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/tdot-dark.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/tdot-dark.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/tdot-dark.png"
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
