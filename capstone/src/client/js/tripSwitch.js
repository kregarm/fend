function tripSwitch(id){

    // Switch global id to a previously saved trip
    window.id = id.value;

    // Find the old trip in localstorage
    const items = { ...localStorage };
    for (let item in items) {
        // It appears that webpack adds something to the localstorage
        if (item === window.id) {
            let trip = JSON.parse(localStorage.getItem(item))
            Client.getWeatherData(trip.lat, trip.lng)
            Client.setTripText(trip.destination)
            Client.setImages(trip.images)
        };
    };
}

export { tripSwitch }