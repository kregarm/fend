const button = document.getElementById('generate');
const apiKey = '05d54d23b1d96c29045fa928aa6f1a25';

button.addEventListener('click', () => {
    let city = document.getElementById('city').value;
    let feelings = document.getElementById('feelings').value;
    let date = new Date(Date.now());
    date = date.toDateString();

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            postData('http://localhost:8000/get-data', {
                city: city,
                feelings: feelings,
                weather: data.weather[0],
                temp: data.main.temp,
                date: date
            });

            // Clear inputs so user can enter a new city and feelings
            document.getElementById('city').value = '';
            document.getElementById('feelings').value = '';
        }).catch(function (err) {
            console.log(err)
        })


    const postData = async (url = '', data = {}) => {
        const response = await fetch(url, {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            // Body data type must match "Content-Type" header        
            body: JSON.stringify(data),
        });

        try {
            const newData = await response.json();
            AddElementsToPage(newData);
        } catch (error) {
            console.log("error", error);
        }
    }
})

AddElementsToPage = function (element) {

    let newDiv = document.createElement('div');
    newDiv.classList.add('entryHolder');

    let newHeading = document.createElement('h3');
    newHeading.innerText = `Selected city: ${element.city}, date: ${element.date}`;

    let weatherParagraph = document.createElement('p');
    weatherParagraph.innerText = `Weather: ${element.weather.main}`;

    let tempParagraph = document.createElement('p');
    tempParagraph.innerText = `Temp: ${element.temp}`;

    let feelingsParagraph = document.createElement('p');
    feelingsParagraph.innerText = `Feelings: ${element.feelings}`;

    let weatherImage = document.createElement('img');
    weatherImage.src = `http://openweathermap.org/img/w/${element.weather.icon}.png`;
    weatherImage.alt = element.weather.main

    newDiv.appendChild(newHeading);
    newDiv.appendChild(feelingsParagraph);
    newDiv.appendChild(weatherParagraph);
    newDiv.appendChild(tempParagraph);
    newDiv.appendChild(weatherImage);

    let sections = document.getElementById('posts');
    sections.appendChild(newDiv);
}
