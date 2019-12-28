const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('../../config');
const aylien = require('aylien_textapi');

const textApi = new aylien({
    application_id: config.application_id,
    application_key: config.application_key
});

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static('dist'));

app.get('/', (req, res) => {
    res.sendFile('dist/index.html')
});

app.get('/live', (req, res) => {
    res.sendStatus(200);
})

app.get('/test', (req, res) => {
    textApi.sentiment({
        'text': 'John is a very good football player!'
    }, function(error, response) {
        if (error === null) {
          console.log(response);
        }
    });
})

app.listen(8081, () => {
    console.log('Server listening on port 8081');
})