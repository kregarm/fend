function getWeatherData(lat, lng) {
    //THIS WONT WORK - SETUP A ROUTE ON SERVER AND CALL DARKSKY FROM SERVER!!!
    const url = `https://api.darksky.net/forecast/${Client.darkSkyApiKey}/${lat},${lng}`
    fetch(url, { mode: 'no-cors'}).then(function (response) {
        console.log(response)
        return response.json();
      }).then(function (data) {
        console.log(data);
      }).catch(function (e) {
        console.log(e);
      });
}

export { getWeatherData }