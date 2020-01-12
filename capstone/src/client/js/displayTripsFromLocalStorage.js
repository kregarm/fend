function displayTripsFromLocalStorage () {
    // Retrieve all items from localstorage
    const items = {...localStorage};

    var section = document.getElementById('body')
    var select = document.createElement("select");
    let fragement = document.createDocumentFragment();
    for (let item in items) {

        // It appears that webpack adds something to the localstorage
        if (item != 'loglevel:webpack-dev-server') {
            let trip = JSON.parse(localStorage.getItem(item))
            var option = document.createElement("option");
            option.text = `${trip.destination}, ${trip.date}`
            option.value = item
            select.add(option)
        };
    };

    fragement.appendChild(select)
    section.appendChild(fragement)
}

export { displayTripsFromLocalStorage }