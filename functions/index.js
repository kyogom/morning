const express = require('express');
const functions = require('firebase-functions');
const cors = require('cors');
const morning = require('./model').morning;

const app = express();
app.use(cors({ origin: true }));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/morning', async (req, res) => res.send(await morning.getMorningRecord(req, res)));

exports.api = functions.https.onRequest(app);
