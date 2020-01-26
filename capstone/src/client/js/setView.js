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
        divTag.setAttribute('class', 'image-placeholder');
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

    /*
    Only display trips if the exist
    This won't work correctly in dev env if you don't have
    at least two trips stored as webpack ads it's own entry
    to localstorage. This isn't an issue with prod build.
    */
    const numOfItems = Object.keys(items).length;
    if (numOfItems > 0) {
        let section = document.getElementById('location-text');
        let fragement = document.createDocumentFragment();

        let select = document.createElement("select");
        select.setAttribute('onchange', `Client.tripSwitch(this)`);
        select.setAttribute('id', 'trip-switcher');

        let firstOption = document.createElement('option');
        firstOption.text = 'Past trips';
        select.add(firstOption);

        let tagForSwither = document.createElement('h4');
        tagForSwither.innerHTML = 'Or select one of you past trips: ';
        tagForSwither.setAttribute('id', 'tag-label');
        fragement.appendChild(tagForSwither);
        
        for (let item in items) {
            // It appears that webpack adds something to the localstorage
            if (item != 'loglevel:webpack-dev-server') {
                let trip = JSON.parse(localStorage.getItem(item));
                var option = document.createElement("option");
                option.text = `${trip.destination}, ${trip.date}`;
                option.value = item;
                select.add(option);
            };
        };

        fragement.appendChild(select);
        section.appendChild(fragement);
    }
}

function setMapImage(img) {

    var imagePlaceholder = document.getElementById('map-image');
    
    // Clear if something is already set
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
        <button id='dismiss' onclick="Client.dismissModal()">Dismiss</button>
    </section>
    `;
    document.body.innerHTML += modal;
}

function displayTodos(){
    const items = { ...localStorage };
    let tripId = window.id;

    const todoSection = document.getElementById('todo-display');
    todoSection.innerHTML = '';
    let fragement = document.createDocumentFragment();

    for (let item in items) {
        if (item === tripId) {
            let trip = JSON.parse(localStorage.getItem(item));
            if (trip.todos){
                for (let todo of trip.todos) {
                    let input = document.createElement("input");
                    let label = document.createElement("label");
                    let div = document.createElement('div');
                    
                    div.setAttribute('class', 'todo-item');
                    label.setAttribute('for', todo.id);
                    label.innerText = todo.task;
                    input.setAttribute('type', 'checkbox');
                    input.setAttribute('id', todo.id);
                    input.setAttribute('onclick', `Client.toggleTodo('${todo.id}')`);

                    if (todo.done === true) {
                        input.setAttribute('checked', 'checked');
                    };
                    
                    div.appendChild(input);
                    div.appendChild(label);
                    fragement.appendChild(div);
                };
            };
        };
    };

    todoSection.appendChild(fragement);
}

function displayWeatherForecast(data){
    let section = document.getElementById('weather');
    section.innerHTML = '';

    let fragement = document.createDocumentFragment();
    let headerText = document.createElement('h2');
    headerText.innerHTML = `Summary for this week: ${data.summary}`;
    let foreCastPlacehodler = document.createElement('div');
    foreCastPlacehodler.setAttribute('id', 'forecast-placeholder');
    fragement.appendChild(headerText);

    for (let entry of data.data) {
        let div = document.createElement('div');
        div.setAttribute('class', 'forecast-element');
        let summaryPar = document.createElement('p');
        summaryPar.innerHTML = entry.summary;
        let datePar = document.createElement('p');
        let friendlyTime = new Date(entry.time * 1000);
        datePar.innerHTML = friendlyTime.toDateString();
        let tempPar = document.createElement('p');
        tempPar.innerHTML = `Daily temperatures between: ${entry.temperatureLow} and ${entry.temperatureHigh}`;

        div.appendChild(datePar);
        div.appendChild(tempPar);
        div.appendChild(summaryPar);
        foreCastPlacehodler.appendChild(div);
    }
    
    section.appendChild(fragement);
    section.appendChild(foreCastPlacehodler);
}
function displayTimeMachineForecast(data){
    let section = document.getElementById('weather');
    section.innerHTML = '';

    let fragement = document.createDocumentFragment();
    let headerText = document.createElement('h2');
    headerText.innerHTML = `Weather summary for the selected date: ${data.summary}, temperature: ${data.apparentTemperature}`;
    fragement.appendChild(headerText);
    section.appendChild(fragement);
}
export {setTripText, 
        setImages, 
        displayTripsFromLocalStorage, 
        setMapImage, 
        displayModal, 
        displayTodos, 
        displayWeatherForecast, 
        displayTimeMachineForecast}