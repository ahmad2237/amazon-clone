import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCdmFd5puc323wjAaQ9QS7gTtqvBH4t3rU",
  authDomain: "clone-7a1eb.firebaseapp.com",
  projectId: "clone-7a1eb",
  storageBucket: "clone-7a1eb.appspot.com",
  messagingSenderId: "1090173728255",
  appId: "1:1090173728255:web:f3f3fd18a54ee1ca08a3ca",
  measurementId: "G-1PETB4FTV4",
};
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db= firebaseApp.firestore();
const auth= firebase.auth();

export {db,auth};
