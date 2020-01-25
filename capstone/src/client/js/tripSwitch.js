function tripSwitch(id){

    // Switch global id to a previously saved trip
    window.id = id.value;

    // Find the old trip in localstorage
    const items = { ...localStorage };
    for (let item in items) {
        if (item === window.id) {
            let trip = JSON.parse(localStorage.getItem(item))
            Client.getCurrentWeekForecast(trip.lat, trip.lng)
            Client.setTripText(trip.destination, trip.date)
            Client.setImages(trip.images)
            Client.setMapImage(trip.mapImage)
            Client.displayTodos();
        };
    };
}

export { tripSwitch }