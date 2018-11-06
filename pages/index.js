import React, { useState } from 'react';

import { AwesomeButton, AwesomeButtonSocial } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';

import ParticleButton from 'react-particle-effect-button';

import Main from '../components/Main';
import Facts from '../components/Facts';
import useFirebase from '../hooks';

const App = () => {
  const [isVisible, toggleVisibility] = useState(true);
  const count = useFirebase();
  return (
    <Main>
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 72,
        }}
      >
        <h1>No Crackers</h1>
        <Facts />
        {count === null ? (
          <h2>Ready to Join?</h2>
        ) : (
          <h2>{count} People have joined</h2>
        )}
        <ParticleButton hidden={!isVisible}>
          <div
            role="button"
            tabIndex="0"
            onClick={() => toggleVisibility(false)}
            onKeyPress={() => toggleVisibility(false)}
          >
            <AwesomeButton>Join the Pledge</AwesomeButton>
          </div>
        </ParticleButton>
        <div
          css={{
            display: 'grid',
            gridGap: 16,
            marginTop: 24,
            gridAutoFlow: 'column',
          }}
        >
          <AwesomeButtonSocial type="twitter">
            Share on Twitter
          </AwesomeButtonSocial>
          <AwesomeButtonSocial type="facebook">
            Share on Facebook
          </AwesomeButtonSocial>
        </div>
      </div>
    </Main>
  );
};

export default App;
