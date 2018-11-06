import { useEffect, useState } from 'react';

import env from '../env';

const useFirebase = () => {
  const [count, setCount] = useState(null);
  useEffect(() => {
    try {
      const firebase = require('firebase/app'); // eslint-disable-line
      require('firebase/database'); // eslint-disable-line
      firebase.initializeApp(env);
      const event = firebase.database().ref('/count');
      event.on('value', value => setCount(value.val()));
      return () => event.off('value');
    } catch (e) {
      // catches firebase duplicate app
    }
    return null;
  });
  return count;
};

export default useFirebase;
