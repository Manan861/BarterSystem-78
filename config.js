import * as firebase from 'firebase';
require('@firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyCdJm0RJIIxPlbj0ikv6E_06r1OuTUZkHI",
  authDomain: "storyapp-3feae.firebaseapp.com",
  projectId: "storyapp-3feae",
  storageBucket: "storyapp-3feae.appspot.com",
  messagingSenderId: "713475175747",
  appId: "1:713475175747:web:8f7b526f65a8d2e130abf6"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();