import firebase from 'firebase';
import 'firebase/analytics';

const config = {
  apiKey: 'AIzaSyDIFc8sUr1JQSHNqEY8QqLOxd42wjI91l8',
  authDomain: 'taikikishiyama-port.firebaseapp.com',
  databaseURL: 'taikikishiyama-port.firebaseio.com',
  projectId: 'taikikishiyama-port',
  storageBucket: 'taikikishiyama-port.appspot.com',
  messagingSenderId: '493593376248'
};
firebase.initializeApp(config);
// const functions = firebase.functions();
// functions.analytics();
// export { functions };
export const functions = firebase.functions();
