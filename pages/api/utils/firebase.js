// firebase.js
import firebase from 'firebase/compat/app'; // Change this line
import 'firebase/compat/auth';
import 'firebase/compat/firestore'; 
import React, { useEffect, useState } from 'react';

try {
  // Check if Firebase is already initialized
  firebase.app();
} catch (error) {
  // If not, initialize Firebase with your configuration
  firebase.initializeApp({
    apiKey: 'AIzaSyBikF5NvyrMg4tlhsFZkIbWtzPzSUO4v_8',
    authDomain: 'rich-synapse-208705.firebaseapp.com',
    projectId: 'rich-synapse-208705',
    storageBucket: 'rich-synapse-208705.appspot.com',
    messagingSenderId: '81509751606',
    appId: '1:81509751606:web:703b94ba9dac8d61827197',
  });
}


const app = firebase.app();
export const auth = firebase.auth();
export const db = firebase.firestore();

// Export the initialized Firebase instance
export default firebase;