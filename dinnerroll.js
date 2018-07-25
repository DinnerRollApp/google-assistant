'use strict';

const {dialogflow} = require('actions-on-google');
const functions = require('firebase-functions');

const app = dialogflow({debug: true});



app.intent('Default Welcome Intent', (conversation) => {
    // Do things 
});

  exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);