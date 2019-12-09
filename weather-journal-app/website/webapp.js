const button = document.getElementById('confirm');
const apiKey = '05d54d23b1d96c29045fa928aa6f1a25';
let appData = {};
button.addEventListener('click', () => {
    let city = document.getElementById('city').value;
    let feelings = document.getElementById('feelings').value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            postData('/getData', { city: city, feelings: feelings, weather: data.weather[0] });
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

AddElementsToPage = function (elements){
    appData = elements;
    console.log('appData is', appData)
    for(element in elements){
        console.log(element);
    }
}
