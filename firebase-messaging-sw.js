importScripts("https://www.gstatic.com/firebasejs/8.2.10/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.10/firebase-messaging.js");

var firebaseConfig = {
    apiKey: "AIzaSyDw4sHWyPhkEGhniDh9S-zDyNljJE2ZAFc",
    authDomain: "nonrox-2.firebaseapp.com",
    databaseURL: "https://nonrox-2-default-rtdb.firebaseio.com",
    projectId: "nonrox-2",
    storageBucket: "nonrox-2.appspot.com",
    messagingSenderId: "944147559503",
    appId: "1:944147559503:web:e7528bb29d90068e0f263a",
    measurementId: "G-09QGQXK7P5"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
