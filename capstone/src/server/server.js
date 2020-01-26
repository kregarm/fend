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
app.use(express.static('dist'));

app.get('/', (req, res) => {
    res.sendFile('dist/index.html')
});

app.post('/get-geo-data', (req, resp) => {
    let location = req.body.location;
    const url = encodeURI(`http://api.geonames.org/geoCodeAddressJSON?q=${location}&username=${process.env.GEONAMES_USERNAME}`)
    request(url, { json: true}, (err, res, body) => {
        if (err) {
            console.log(err);
        }
        resp.status(200).json({lat: body.address.lat, lng: body.address.lng});
    });
});

app.post('/get-weather-forecast', (req, resp) => {
    let lat = req.body.lat;
    let lng = req.body.lng;
    const url = `https://api.darksky.net/forecast/${process.env.DARKSKY_API_KEY}/${lat},${lng}`;
    request(url, { json: true}, (err, res, body) => {
        if (err) {
            console.log(err);
        }
        resp.status(200).json(body.daily);
    });
});

app.post('/get-weather-forecast-timemachine', (req, resp) => {
    let lat = req.body.lat;
    let lng = req.body.lng;
    let time = req.body.time;
    const url = `https://api.darksky.net/forecast/${process.env.DARKSKY_API_KEY}/${lat},${lng},${time}`;
    request(url, { json: true}, (err, res, body) => {
        if (err) {
            console.log(err);
        }
        resp.status(200).json(body.currently);
    });
});

app.post('/get-images', (req, resp) => {
    let location = req.body.location;
    const url = encodeURI(`https://pixabay.com/api/?key=${process.env.PIXABY_API_KEY}&q=${location}&image_type=photo&category=places`);
    request(url, { json: true}, (err, res, body) => {
        if (err) {
            console.log(err);
        }
        resp.status(200).json(body.hits);
    });
});

app.post('/get-map', (req, resp) => {
    let lat = req.body.lat;
    let lng = req.body.lng;
    const url = encodeURI(`https://image.maps.ls.hereapi.com/mia/1.6/mapview?apiKey=${process.env.HEREMAPS_API_KEY}&c=${lat},${lng}&t=0&z=5&h=300&w=420&nodot`);
    resp.json(url)
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});