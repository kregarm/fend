const submit = document.getElementById('submit')

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

})