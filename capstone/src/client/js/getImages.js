function getImages(location) {
    Client.postData('http://localhost:8081/get-images', { location })
      .then((res) => {
        Client.storeImages(res);
        Client.setImages(res);
      }).catch((err) => {
        console.log(err);
      });
  };
  export { getImages }