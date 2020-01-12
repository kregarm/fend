const submit = document.getElementById('submit')
const username = ''

submit.addEventListener('click', () => {
    let dateInput = document.getElementById('date');
    let destinationInput = document.getElementById('place');
    let tripId = uuidv1();

    let tripData = {
        'date': dateInput.value,
        'destination': destinationInput.value
    }
    
    let element = document.getElementById('intro-modal');
    element.parentNode.removeChild(element);

    localStorage.setItem(tripId, JSON.stringify(tripData));

    Client.displayTripsFromLocalStorage();

    let url = encodeURI(`http://api.geonames.org/geoCodeAddressJSON?q=${destinationInput.value}&username=${username}`)
    fetch(url).then(function(response) {
        console.log(response)
        return response.json();
      }).then(function(data) {
        console.log(data);
      }).catch(function(e) {
        console.log(e);
      });
});