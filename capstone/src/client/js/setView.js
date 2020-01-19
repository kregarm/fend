function setTripText(text, date) {
    document.getElementById('trip-destination').textContent = text;
    document.getElementById('trip-date').textContent = date;
}

function setImages(images) {
    const imageSection = document.getElementById('images');

    // Clear any previous images that may exist
    imageSection.innerHTML = '';

    const pageFragement = document.createDocumentFragment();

    for (let image of images) {
        const divTag = document.createElement('div');
        divTag.setAttribute('class', 'image-placeholder')
        const imgTag = document.createElement('img');
        imgTag.setAttribute('src', image.webformatURL);
        imgTag.setAttribute('alt', image.tags);
        divTag.appendChild(imgTag);
        pageFragement.appendChild(divTag);
    }

    imageSection.appendChild(pageFragement)
}

function displayTripsFromLocalStorage() {
    // Retrieve all items from localstorage
    const items = { ...localStorage };

    // Remove the existing select and label if they exist
    if (document.getElementById('trip-switcher')){
        document.getElementById('trip-switcher').remove();
        document.getElementById('tag-label').remove();
    };

    // Only display trips if the exist
    const numOfItems = Object.keys(items).length;
    if (numOfItems > 2) {
        let section = document.getElementById('location-text')
        let fragement = document.createDocumentFragment();

        let select = document.createElement("select");
        select.setAttribute('onchange', `Client.tripSwitch(this)`)
        select.setAttribute('id', 'trip-switcher')

        let firstOption = document.createElement('option');
        firstOption.text = 'Past trips';
        select.add(firstOption);

        
        let tagForSwither = document.createElement('h4');
        tagForSwither.innerHTML = 'Or select one of you past trips: ';
        tagForSwither.setAttribute('id', 'tag-label')
        fragement.appendChild(tagForSwither);
        
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
}

function setMapImage(img) {
    var imagePlaceholder = document.getElementById('map-image');
    imagePlaceholder.innerHTML = '';
    var image = document.createElement('img');
    image.setAttribute('src', img);
    imagePlaceholder.appendChild(image);
}

function displayModal(){
    const modal = `
    <section id="intro-modal">
        <h1>Plan your trip</h1>
        <form>
            <label for="place">Where to?</label>
            <input type="text" name="place" id="place">
            <label for="date">When?</label>
            <input type="date" id="date">
        </form>
        <button id='submit' onclick='Client.submit()'>Submit</button>
    </section>
    `;
    document.body.innerHTML += modal;
}
export { setTripText, setImages, displayTripsFromLocalStorage, setMapImage, displayModal }