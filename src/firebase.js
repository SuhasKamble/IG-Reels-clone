import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyBvYPpbjjUcP1J2azO1YkOa16h7Hzz_Itw",
    authDomain: "ig-reels-clone2.firebaseapp.com",
    databaseURL: "https://ig-reels-clone2.firebaseio.com",
    projectId: "ig-reels-clone2",
    storageBucket: "ig-reels-clone2.appspot.com",
    messagingSenderId: "278471101880",
    appId: "1:278471101880:web:ce4a05e60ffa520a95134d",
    measurementId: "G-2Z7EVDPXK3"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()

export default db;