import React, { useState } from 'react';

import { AwesomeButton, AwesomeButtonSocial } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';

import ParticleButton from 'react-particle-effect-button';
import { mediaMax } from '@divyanshu013/media';

import Main from '../components/Main';
import Facts from '../components/Facts';
import { useFirebase, useLocalStorage } from '../hooks';

const App = () => {
  const [isVisible, toggleVisibility] = useState(true);
  const [count, setCount, firebaseEvent] = useFirebase();
  const [isPledged, setIsPledged] = useLocalStorage();
  const handleSubmit = () => {
    toggleVisibility(false);
    firebaseEvent.transaction(value => {
      // firebase is weird
      if (value) {
        setCount(count + 1);
        setIsPledged('y');
        return value + 1;
      }
      return 1;
    });
  };
  const message =
    count !== null
      ? `I pledge for green diwali along with ${count} people. Join me! #NoCrackers https://no-crackers.netlify.com`
      : 'I pledge for green diwali. Join me #NoCrackers https://no-crackers.netlify.com';
  const hidePledgeButton = isPledged === 'y' ? true : !isVisible;
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
        {count && (
          <ParticleButton
            hidden={hidePledgeButton}
            type="triangle"
            size={8}
            color="#eee"
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
        )}
        {isPledged === 'y' && (
          <div css={{ textAlign: 'center' }}>
            Thanks for joining! Spread the word...
          </div>
        )}
        <div
          css={{
            display: 'grid',
            gridGap: 16,
            marginTop: 24,
            gridAutoFlow: 'column',
            a: {
              outline: 'none',
              border: 'none',
            },
            [mediaMax.small]: {
              gridAutoFlow: 'row',
            },
          }}
        >
          <AwesomeButtonSocial
            type="twitter"
            target="_blank"
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
              message,
            )}`}
          >
            Share on Twitter
          </AwesomeButtonSocial>
          <AwesomeButtonSocial
            type="facebook"
            target="_blank"
            href={` http://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              'https://no-crackers.netlify.com',
            )}&quote=${encodeURIComponent(message)}`}
          >
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
