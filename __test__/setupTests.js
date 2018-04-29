import firebaseTest from '../src/firebase/firebaseTest';
import * as firebase from 'firebase';

if (firebase.apps.length === 0) firebase.initializeApp(firebaseTest);
