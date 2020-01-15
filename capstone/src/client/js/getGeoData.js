function getGeoData(location) {
  Client.postData('http://localhost:8081/get-geo-data', { location })
    .then((res) => {
      console.log('response is', res)
      Client.getWeatherData(res.lat, res.lng)
      Client.getImages(location)
    }).catch((err) => {
      console.log(err);
    });
};
export { getGeoData };