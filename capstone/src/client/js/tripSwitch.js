function tripSwitch(id){

    // Switch global id to a previously saved trip
    window.id = id.value;
    let today = Date.parse(new Date());

    // Find the old trip in localstorage
    const items = { ...localStorage };
    for (let item in items) {
        if (item === window.id) {
            let trip = JSON.parse(localStorage.getItem(item))
            Client.setTripText(trip.destination, trip.date)
            Client.setImages(trip.images)
            Client.setMapImage(trip.mapImage)
            Client.displayTodos();
            if (trip.epochDate - today > 0 && trip.epochDate - today < 432000000) {
                Client.getCurrentWeekForecast(trip.lat, trip.lng);
              } else {
                Client.getTimeMachineForecast(trip.lat, trip.lng, trip.epochDate/1000);
            };
        };
    };
}

export { tripSwitch }