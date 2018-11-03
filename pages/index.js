import React from 'react';
import Twitter from 'react-feather/dist/icons/twitter';
import Facebook from 'react-feather/dist/icons/facebook';

import Main from '../components/Main';
import Button from '../components/Button';

export default () => (
  <Main>
    <h1>No Crackers</h1>
    <h2>0 People have joined</h2>
    <Button>Join the Pledge</Button>
    <Button>
      <Twitter />
      Share on Twitter
    </Button>
    <Button>
      <Facebook />
      Share on Facebook
    </Button>
  </Main>
);
