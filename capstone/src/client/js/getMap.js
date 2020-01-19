function getMap(lat, lng) {
    Client.postData('http://localhost:8081/get-map', { lat, lng })
      .then((res) => {
          Client.storeMapImage(res);
          Client.setMapImage(res);
      }).catch((err) => {
        console.log(err);
      });
  };

export { getMap }