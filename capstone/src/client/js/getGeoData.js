function getGeoData(location, tripWeek, date) {
  Client.postData('http://localhost:8081/get-geo-data', { location })
    .then((res) => {
      if (tripWeek === 'currentWeek') {
        Client.getCurrentWeekForecast(res.lat, res.lng);
      } else if (tripWeek === 'anyWeek') {
        Client.getTimeMachineForecast(res.lat, res.lng, date);
      }
      Client.storeLocationData(res.lat, res.lng);

      Client.getImages(location);
      Client.getMap(res.lat, res.lng);
    }).catch((err) => {
      console.log(err);
    });
};
export { getGeoData }