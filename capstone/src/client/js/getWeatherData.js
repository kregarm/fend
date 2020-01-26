function getCurrentWeekForecast(lat, lng) {
    console.log('lat, lng from weatherData', lat, lng)
    Client.postData('http://localhost:8081/get-weather-forecast', { lat, lng })
      .then((res) => {
        Client.displayWeatherForecast(res);
      }).catch((err) => {
        console.log(err);
      });
};

function getTimeMachineForecast(lat, lng, time) {
  Client.postData('http://localhost:8081/get-weather-forecast-timemachine', { lat, lng, time })
    .then((res) => {
      Client.displayTimeMachineForecast(res);
    }).catch((err) => {
      console.log(err);
    });
};

export { getCurrentWeekForecast, getTimeMachineForecast }