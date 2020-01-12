const submit = document.getElementById('submit')
const username = 'martinkregar'

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

    // to retrive trip data
    //let trip = JSON.parse(localStorage.getItem(tripId))

    const items = {...localStorage};

    var section = document.getElementById('body')
    var select = document.createElement("select");
    let fragement = document.createDocumentFragment();
    for (item in items) {
        let trip = JSON.parse(localStorage.getItem(item))
        var option = document.createElement("option");
        option.text = `${trip.destination}, ${trip.date}`
        option.value = item
        select.add(option)
    };

    let url = encodeURI(`http://api.geonames.org/geoCodeAddressJSON?q=${destinationInput.value}&username=${username}`)
    fetch(url).then(function(response) {
        console.log(response)
        return response.json();
      }).then(function(data) {
        console.log(data);
      }).catch(function(e) {
        console.log(e);
      });
    fragement.appendChild(select)
    section.appendChild(fragement)
});