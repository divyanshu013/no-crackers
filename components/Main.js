import React from 'react';
import { hydrate } from 'react-emotion';
import Head from 'next/head';
import { node } from 'prop-types';

// Adds server generated styles to emotion cache.
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined') {
  hydrate(window.__NEXT_DATA__.ids);
}

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
