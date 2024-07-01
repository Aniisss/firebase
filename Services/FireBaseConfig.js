const fireBase = require('firebase/app'); 
const {getFirestore} = require('firebase/firestore')
const dotenv = require('dotenv');
dotenv.config()  // load the environment variables

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId:  process.env.PROJECT_ID,
    storageBucket:  process.env.STORAGE_BUCKET,
    messagingSenderId:  process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID ,
    measurementId:  process.env.MEASUREMENT_ID
  };

  function initializeFirebase() {
    try {
        fireBase.initializeApp(firebaseConfig);
        firestoreDB = getFirestore()
        console.log("Successfully connected to Firebase!");
    } catch (error) {
      console.error("Can't connect to Firebase:", error);
    }
  }
  
  module.exports = {firebaseConfig , initializeFirebase };