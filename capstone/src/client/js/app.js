function submit() {
  let dateInput = document.getElementById('date');
  let destinationInput = document.getElementById('place');
  let tripId = uuidv1();

  let tripData = {
    'date': dateInput.value,
    'destination': destinationInput.value,
    'lat': '',
    'lng': ''
  }
  localStorage.setItem(tripId, JSON.stringify(tripData));

  Client.getGeoData(destinationInput.value);

  let element = document.getElementById('intro-modal');
  element.parentNode.removeChild(element);

  Client.displayTripsFromLocalStorage();
};

export { submit }