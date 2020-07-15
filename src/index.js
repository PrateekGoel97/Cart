import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyChaagVeRK0OeRLv7UM68Ja8zg0mOcqy8A",
    authDomain: "cart-f5c1c.firebaseapp.com",
    databaseURL: "https://cart-f5c1c.firebaseio.com",
    projectId: "cart-f5c1c",
    storageBucket: "cart-f5c1c.appspot.com",
    messagingSenderId: "163565822011",
    appId: "1:163565822011:web:aa1743197cbdf1433ffc1e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


ReactDOM.render(<App />, document.getElementById('root'));
