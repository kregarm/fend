# Intro
This is an assignment for Udacity's nanodegree programme. This assignment focues on build tools - specifically webpack. It also includes a backend written in Nodejs and Express framework. FrontEnd uses MaterializeCSS.

# What does it do?
This app submits your text input to the `aylien` NLP api and displays it's output.

## Getting started
1. Firstly create a `.env` file with the following structure:
```
APP_ID=your_app_id
APP_KEY=your_app_key
```
2. Install dependencies with `npm install`
3. Build the code with `npm run build-prod`
3. Start the server with `npm start`

## Running tests
Run tests with `npm test` command.

## Development
Dev webpack config is also present and it can be used by running the command `npm run build-dev`.