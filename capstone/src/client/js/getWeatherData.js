function getWeatherData(lat, lng) {
    console.log(lat, lng)
    console.log('global id is', window.id)
    Client.postData('http://localhost:8081/get-weather-data', { lat, lng })
      .then((res) => {
        console.log('weather response is', res)
      }).catch((err) => {
        console.log(err);
      });
  };

export { getWeatherData }