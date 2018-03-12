const functions = require('firebase-functions');

const media = require('./media.js');
media.init();

const Multivocal = require('multivocal');

exports.webhook = functions.https.onRequest( (req,res) => {
  Multivocal.process( req, res );
});
