const functions = require('firebase-functions');
const express = require('express')
const firebaseConfig = require('./firebaseConfig')
const app = express()


const {getAllUsers, getOneUser} = require('./handlers/users');

const firebase = require('firebase')
firebase.initializeApp(firebaseConfig)

console.log(functions.config());
app.get('/users', getAllUsers)
app.get('/findone', getOneUser)


exports.api = functions.https.onRequest(app);
