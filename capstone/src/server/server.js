const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const request = require('request');
const port = process.env.PORT || 8081;

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

app.post('/get-geo-data', (req, resp) => {
    let location = req.body.location;
    console.log('location is ', location);
    const url = encodeURI(`http://api.geonames.org/geoCodeAddressJSON?q=${location}&username=${process.env.GEONAMES_USERNAME}`)
    request(url, { json: true}, (err, res, body) => {
        if (err) {
            console.log(err);
        }
        resp.status(200).json({lat: body.address.lat, lng: body.address.lng});
    });
})

app.post('/get-weather-data', (req, resp) => {
    let lat = req.body.lat;
    let lng = req.body.lng
    const url = `https://api.darksky.net/forecast/${process.env.DARKSKY_API_KEY}/${lat},${lng}`;
    request(url, { json: true}, (err, res, body) => {
        if (err) {
            console.log(err);
        }
        resp.status(200).json(body);
    });
})

app.post('/get-images', (req, resp) => {
    let location = req.body.location;
    const url = encodeURI(`https://pixabay.com/api/?key=${process.env.PIXABY_API_KEY}&q=${location}&image_type=photo&category=places`) 
    request(url, { json: true}, (err, res, body) => {
        if (err) {
            console.log(err);
        }
        resp.status(200).json(body);
    });
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})