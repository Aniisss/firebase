const admin = require('firebase-admin') ;
const serviceAccount = require('./serviceAccountKey.json') ; 

function initializeFirebaseAdmin() {
try {
    admin.initializeApp(serviceAccount);
    console.log("Successfully connected to Firebase Admin SDK!");
} catch (error) {
    console.error("Can't connect to Firebase Admin SDK:", error);
}
}

module.exports = initializeFirebaseAdmin ;