import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyBmB_uMNKtprljy0nC0x_GI70mk8Rf8Wks',
    authDomain: 'imoney-360aa.firebaseapp.com',
    projectId: 'imoney-360aa',
    storageBucket: 'imoney-360aa.appspot.com',
    messagingSenderId: '318709751047',
    appId: '1:318709751047:web:50af34cc6482475f8a39a2',
    measurementId: 'G-52FL1Z2GYY',
};

const app = initializeApp(firebaseConfig);
const projectStore = getFirestore();
const projectAuth = getAuth();

export { app, projectAuth, projectStore };
