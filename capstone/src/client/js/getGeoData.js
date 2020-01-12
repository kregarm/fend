function getGeoData(destination) {
    const url = encodeURI(`http://api.geonames.org/geoCodeAddressJSON?q=${destination}&username=${Client.username}`)
    fetch(url).then(function (response) {
        return response.json();
      }).then(function (data) {
        Client.getWeatherData(data.address.lat, data.address.lng)
      }).catch(function (e) {
        console.log(e);
      });
}

export { getGeoData }