// firebase.js
import firebase from 'firebase/compat/app'; // Change this line
import 'firebase/compat/auth';
import 'firebase/compat/firestore'; 

try {
  // Check if Firebase is already initialized
  firebase.app();
} catch (error) {
  // If not, initialize Firebase with your configuration
  firebase.initializeApp({
    apiKey: 'AIzaSyDkFCJjHwBaTL0mURavgECMbqq_9CEKrmw',
    authDomain: 'my-project-1513428656977.firebaseapp.com',
    projectId: 'my-project-1513428656977',
    storageBucket: 'my-project-1513428656977.appspot.com',
    messagingSenderId: '932271568935',
    appId: '1:932271568935:web:48837b5d2b6d69001bb602',
  });
}


const app = firebase.app();
export const auth = firebase.auth();
export const db = firebase.firestore();

// Export the initialized Firebase instance
export default firebase;