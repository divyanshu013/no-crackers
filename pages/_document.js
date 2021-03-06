import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { extractCritical } from 'emotion-server';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const page = renderPage();
    const styles = extractCritical(page.html);
    return { ...page, ...styles };
  }

  constructor(props) {
    super(props);
    const { __NEXT_DATA__, ids } = props;
    if (ids) {
      __NEXT_DATA__.ids = ids;
    }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="No Crackers" />
          <meta
            name="twitter:description"
            content="Join the No Crackers pledge. Help spread the word!"
          />
          <meta name="twitter:creator" content="@divyanshu013 @ekrysis" />
          <meta
            name="twitter:image"
            content="https://no-crackers.netlify.com/static/og.png"
          />
          <meta property="og:title" content="No Crackers" />
          <meta
            property="og:description"
            content="Join the No Crackers pledge. Help spread the word!"
          />
          <meta property="og:url" content="https://no-crackers.netlify.com" />
          <meta
            property="og:image"
            content="https://no-crackers.netlify.com/static/og.png"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Lato|Rubik|Bungee+Shade"
            rel="stylesheet"
          />
          <style
            // eslint-disable-next-line
            dangerouslySetInnerHTML={{ __html: this.props.css }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
