function submit() {
  let dateInput = document.getElementById('date');
  let destinationInput = document.getElementById('place');
  let today = Date.parse(new Date());

  //Calculate if the date is in the future or past
  //Only proceed if a date in the future is selected!
  if (today - Date.parse(dateInput.value) > 0) {

    alert('Cannot select a past date. Date must be in the future.');

  } else {

    let tripId = uuid();

    //Set a global variable on window.id for reference
    window.id = tripId;

    //Store data to localStorage
    let tripData = {
      'date': dateInput.value,
      'epochDate': Date.parse(dateInput.value),
      'destination': destinationInput.value,
      'lat': '',
      'lng': '',
      'mapImage': '',
      'images': [],
      'todos': []
    };

    localStorage.setItem(tripId, JSON.stringify(tripData));

    //Calculate if date is within the week or not
    //432000000 is the value of 5 days in milliseconds
    var slectedDate = Date.parse(dateInput.value);
    if (slectedDate - today > 432000000) {
      //Call the GeoData function - if successful it later calls the getImages, getWeather and getMap functions
      Client.getGeoData(destinationInput.value, 'anyWeek', slectedDate / 1000);
    } else {
      Client.getGeoData(destinationInput.value, 'currentWeek', null);
    };

    //Remove modal
    let element = document.getElementById('intro-modal');
    element.parentNode.removeChild(element);

    //Set basic label in the header
    Client.setTripText(destinationInput.value, dateInput.value);

    //Display a dropdown with all trips stored 
    Client.displayTripsFromLocalStorage();

    //Call this to clear Todos in UI if they exist
    Client.displayTodos();
  };
};

export { submit }