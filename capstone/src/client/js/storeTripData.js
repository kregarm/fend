function storeLocationData (lat, lng) {
    const items = { ...localStorage };
    for (let item in items) {
        if (item === window.id) {
            let trip = JSON.parse(localStorage.getItem(item));
            trip.lat = lat; 
            trip.lng = lng;
            localStorage.setItem(item, JSON.stringify(trip));
        };
    };
}

function storeImages (images) {
    const items = { ...localStorage };
    for (let item in items) {
        if (item === window.id) {
            let trip = JSON.parse(localStorage.getItem(item));
            for (let image of images) {
                trip.images.push(image)
            }
            localStorage.setItem(item, JSON.stringify(trip));
        };
    };
}

export{ storeLocationData, storeImages }