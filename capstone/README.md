# Capstone project for Udacity

## Installation
Clone this repo, `cd` into it and install dependencies with `npm install`.
Copy the `.env.sample` file to `.env` and provide your API keys. For this app you'll need:
1. Geonames api
2. DarkSky api
3. HereMaps api
4. Pixaby api

## Running the application
1. To run the tests use `npm test`
2. To run the server use `npm start`
3. To run the application in development model use `npm run build-dev`
4. To build the application for production use `npm run build-prod`

## What is it?
It's a simple travel planning app - it shows you the location of your trip, images, weather and stores your
todos in localStorage. It also has basic offline capabilities - because this app stores everything in your localStorage, you can use the app even in offline mode you just won't get the weather info as it's not something you want to have stored anyway.