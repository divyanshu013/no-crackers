import React from 'react';
import { hydrate, injectGlobal } from 'react-emotion';
import Head from 'next/head';
import { node } from 'prop-types';
import { mediaMax } from '@divyanshu013/media';

// Adds server generated styles to emotion cache.
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined') {
  hydrate(window.__NEXT_DATA__.ids);
}

// eslint-disable-next-line
injectGlobal`
  body {
    font-family: 'Rubik', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    background-image: linear-gradient(120deg, #a6c0fe 0%, #f68084 100%);
    background-repeat: no-repeat;
    color: #424242;
    box-sizing: border-box;
    height: 100vh;
  }
  h1 {
    font-family: 'Bungee Shade', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 6rem;
    color: #222;
    ${mediaMax.medium} {
      font-size: 3rem;
    };
  }
  h2 {
    font-family: 'Lato', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
  a, a:visited, a:focus, a:hover {
    color: #424242;
    text-decoration: none;
    border-bottom: 1px dashed #424242;
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
