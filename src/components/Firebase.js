import firebase from 'firebase/app';
import 'firebase/firestore';
// import 'firebase/storage';
import 'firebase/auth';
// import 'firebase/database';

// const firebaseApp = window.firebase;
var firebaseConfig = {
    apiKey: "AIzaSyA83xp6gqeMBUhJIDvVhKVoP4kNxCyKpYo",
    authDomain: "safe-menu-15a97.firebaseapp.com",
    databaseURL: "https://safe-menu-15a97.firebaseio.com",
    projectId: "safe-menu-15a97",
    storageBucket: "safe-menu-15a97.appspot.com",
    messagingSenderId: "1068413464697",
    appId: "1:1068413464697:web:e967b23a380c4d4c2de4a8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;
