const express = require('express') ;
const { initializeFirebase} = require('./Services/FireBaseConfig') ;
const initializeFirebaseAdmin = require('./Services/FirebaseAdminConfig') ;


const app = express() ;
app.use(express.json()) ;

initializeFirebase() ;
initializeFirebaseAdmin() ;



app.listen(3000, () => {
    console.log("Server is running on port 3000");
  })