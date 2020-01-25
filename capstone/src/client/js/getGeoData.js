function getGeoData(location, tripWeek) {
  Client.postData('http://localhost:8081/get-geo-data', { location })
    .then((res) => {
      if (tripWeek === 'currentWeek') {
        Client.getCurrentWeekForecast(res.lat, res.lng)
      } else if (tripWeek === 'anyWeek') {
        console.log('tbd')
      }
      Client.storeLocationData(res.lat, res.lng)
      
      Client.getImages(location)
      Client.getMap(res.lat, res.lng)
    }).catch((err) => {
      console.log(err);
    });
};
export { getGeoData };