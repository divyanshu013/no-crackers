import React, { useState } from 'react';

import { AwesomeButton, AwesomeButtonSocial } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';

import ParticleButton from 'react-particle-effect-button';
import { mediaMax } from '@divyanshu013/media';

import Main from '../components/Main';
import Facts from '../components/Facts';
import useFirebase from '../hooks';

const App = () => {
  const [isVisible, toggleVisibility] = useState(true);
  const [count, setCount, firebaseEvent] = useFirebase();
  const handleSubmit = () => {
    toggleVisibility(false);
    firebaseEvent.transaction(value => {
      // firebase is weird
      if (value) {
        setCount(count + 1);
        return value + 1;
      }
      return 1;
    });
  };
  return (
    <Main>
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 72,
          marginLeft: 32,
          marginRight: 32,
        }}
      >
        <h1 css={{ textAlign: 'center' }}>No Crackers</h1>
        <Facts />
        {count === null ? (
          <h2 css={{ textAlign: 'center', lineHeight: 1.5 }}>Ready to Join?</h2>
        ) : (
          <h2 css={{ textAlign: 'center', lineHeight: 1.5 }}>
            {count} People have joined
          </h2>
        )}
        <ParticleButton
          hidden={!isVisible}
          type="triangle"
          size={8}
          color="#1e88e5"
        >
          <div
            role="button"
            tabIndex="0"
            onClick={handleSubmit}
            onKeyPress={handleSubmit}
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
            [mediaMax.small]: {
              gridAutoFlow: 'row',
            },
          }}
        >
          <AwesomeButtonSocial type="twitter">
            Share on Twitter
          </AwesomeButtonSocial>
          <AwesomeButtonSocial type="facebook">
            Share on Facebook
          </AwesomeButtonSocial>
        </div>
        <div css={{ marginTop: 80, lineHeight: 1.5, textAlign: 'center' }}>
          With{' '}
          <span role="img" aria-label="love">
            💙
          </span>{' '}
          from{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/divyanshu013"
          >
            @divyanshu013
          </a>{' '}
          and{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/ekrysis"
          >
            @ekrysis
          </a>
          . 🌟 on{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/divyanshu013/no-crackers"
          >
            GitHub
          </a>
        </div>
      </div>
    </Main>
  );
};

export default App;
