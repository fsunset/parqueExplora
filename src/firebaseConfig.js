import Firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB5vA4_vC-mfH6RtJATJGNnjndrP5W6Lbc",
  authDomain: "parqueexplora-9d54b.firebaseapp.com",
  databaseURL: "https://parqueexplora-9d54b.firebaseio.com",
  projectId: "parqueexplora-9d54b",
  storageBucket: "parqueexplora-9d54b.appspot.com",
  messagingSenderId: "491383962937",
  appId: "1:491383962937:web:531cf85cb55c6cb741fce8",
  measurementId: "G-P0SVFC89HY"
};

Firebase.initializeApp(firebaseConfig);

export default Firebase;
