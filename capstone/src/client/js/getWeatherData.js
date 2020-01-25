function getCurrentWeekForecast(lat, lng) {
    console.log('lat, lng from weatherData', lat, lng)
    Client.postData('http://localhost:8081/get-weather-forecast', { lat, lng })
      .then((res) => {
        console.log('weather response is', res)
      }).catch((err) => {
        console.log(err);
      });
};

function getTimeMachineForecast(lat, lng, time) {
  Client.postData('http://localhost:8081/get-weather-forecast-timemachine', { lat, lng, time })
    .then((res) => {
      console.log('timemachine response is', res)
    }).catch((err) => {
      console.log(err);
    });
};

export { getCurrentWeekForecast, getTimeMachineForecast }