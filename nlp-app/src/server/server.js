const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config()
const port = process.env.PORT || 8081
const aylien = require('aylien_textapi');
const regeneratorRuntime = require("regenerator-runtime");

const textApi = new aylien({
    application_id: process.env.APP_ID,
    application_key: process.env.APP_KEY
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

app.post('/test', (req, res) => {
    let content = req.body.data;
    if (content.length < 1) {
        res.status(500).send({error: 'input cannot be empty!'});
    } else {
        textApi.sentiment({'text': content}, (error, response) => {
            if (error === null) {
                res.send(response);
            } else {
                res.status(500).send({error: error});
            }
        });
    };
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})