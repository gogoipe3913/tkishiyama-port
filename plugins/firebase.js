import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyB9K62F2RQ4dTCXhiI6UAHPdykugP-RQOM',
  authDomain: 'tkshy-portfolio.firebaseapp.com',
  databaseURL: 'tkshy-portfolio.firebaseio.com',
  projectId: 'tkshy-portfolio',
  storageBucket: 'tkshy-portfolio.appspot.com',
  messagingSenderId: '39506154234'
};
firebase.initializeApp(config);
export const functions = firebase.functions();
