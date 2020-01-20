function submit() {
  let dateInput = document.getElementById('date');
  let destinationInput = document.getElementById('place');
  let tripId = uuidv1();

  //Set a global variable tripId for reference
  window.id = tripId;

  //Store data to localStorage
  let tripData = {
    'date': dateInput.value,
    'destination': destinationInput.value,
    'lat': '',
    'lng': '',
    'mapImage':'',
    'images': [],
    'todos': []
  }
  localStorage.setItem(tripId, JSON.stringify(tripData));

  //Call the GeoData function - if successful it later calls the getImages and getWeather functions
  Client.getGeoData(destinationInput.value);

  //Remove modal
  let element = document.getElementById('intro-modal');
  element.parentNode.removeChild(element);

  //Set basic label
  Client.setTripText(destinationInput.value, dateInput.value);

  //Display a dropdown with all trips stored 
  Client.displayTripsFromLocalStorage();
};

export { submit }