const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static('dist'));

app.get('/', (req, res) => {
    res.sendFile('dist/index.html')
});

app.get('/isLive', (req, res) => {
    res.sendStatus(200);
})

app.listen(8081, () => {
    console.log('Server listening on port 8081');
})