import React from 'react';
import { hydrate, injectGlobal } from 'react-emotion';
import Head from 'next/head';
import { node } from 'prop-types';

// Adds server generated styles to emotion cache.
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined') {
  hydrate(window.__NEXT_DATA__.ids);
}

// eslint-disable-next-line
injectGlobal`
  body {
    font-family: 'Rubik', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    background: #c31432;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #240b36, #c31432);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #240b36, #c31432); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    color: white;
  }
  h1 {
    font-family: 'Lato', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
`;

// eslint-disable-next-line
const title = <title>🚫🧨 No Crackers</title>;

const Main = ({ children }) => (
  <>
    <Head>{title}</Head>
    <div>{children}</div>
  </>
);

Main.propTypes = {
  children: node.isRequired,
};

export default Main;
