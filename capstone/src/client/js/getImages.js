function getImages(location) {
    Client.postData('http://localhost:8081/get-images', { location })
      .then((res) => {
        console.log('response is', res)
      }).catch((err) => {
        console.log(err);
      });
  };
  export { getImages };