import { useEffect, useState } from 'react';

import env from '../env';

const useFirebase = () => {
  const [count, setCount] = useState(null);
  const [event, setEventHandler] = useState(null);
  useEffect(() => {
    try {
      const firebase = require('firebase/app'); // eslint-disable-line
      require('firebase/database'); // eslint-disable-line
      firebase.initializeApp(env);
      const eventRef = firebase.database().ref('count');
      eventRef.on('value', value => {
        setCount(value.val());
        if (!event) {
          setEventHandler(eventRef);
        }
      });
      return () => eventRef.off('value');
    } catch (e) {
      // catches firebase duplicate app
    }
    return null;
  });
  return [count, setCount, event];
};

export default useFirebase;
