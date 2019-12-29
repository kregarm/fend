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

app.listen(8081, () => {
    console.log('Server listening on port 8081');
})