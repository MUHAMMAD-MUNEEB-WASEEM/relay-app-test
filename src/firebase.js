import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCjqSWecI7qSXgYG5HUyS2K3gzaIFHmCoY",
  authDomain: "epsp-project-82db2.firebaseapp.com",
  databaseURL: "https://epsp-project-82db2-default-rtdb.firebaseio.com",
  projectId: "epsp-project-82db2",
  storageBucket: "epsp-project-82db2.appspot.com",
  messagingSenderId: "799230470507",
  appId: "1:799230470507:web:a9b9051b4e60061683842e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;