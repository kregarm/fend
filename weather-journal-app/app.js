const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
let appData = {fakeDb:[]}; //This will act as the DB, which is not a part of this assignemnt
let id = 0; //This will act as and ID; it gets autoincremented in the app.post function
var app = express();

app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('website'));

const port = 8000;
app.listen(port, () => {
    console.log(`server running on port ${port}.`);
})

app.post('/getData', (req, res) => {
    temObj = {};
    temObj.id = id;
    temObj.city = req.body.city;
    temObj.feelings = req.body.feelings;
    temObj.weather = req.body.weather;

    appData.fakeDb.push(temObj);
    id++;

    res.send(appData);
})