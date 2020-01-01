const submitButton = document.getElementById('submit');
async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return await response.json();
}

submitButton.addEventListener('click', () => {
    let data = document.getElementById('nlp-text').value;

    // Check if the input actually containes something
    if (data.length < 1) {
        alert("Can't evaluate nothing, dummy")
    } else {
        postData('http://localhost:8081/test', { data })
        .then((res) => {
            console.log(res);
            document.getElementById('nlp-text').value = '';
            addCard(res);
        }).catch((err) => {
            console.log(err);
        })
    }
})

function addCard(data) {
    let card = `
    <div class="col s12 m6">
        <div class="card blue-grey darken-1">
            <div class="card-content white-text">
                <span class="card-title">Evaluated text:</span>
                <p><em>${data.text}</em></p>
                <hr />
                <p><strong>Polarity:</strong> ${data.polarity}, <b>confidence:</b> ${data.polarity_confidence}</p>
                <p><strong>Subjectivity:</strong> ${data.subjectivity}, <b>confidence:</b> ${data.subjectivity_confidence}</p>
                </div>
            </div>
        </div>
    </div>
    `
    let cardHolder = document.getElementById("cards-holder");
    cardHolder.insertAdjacentHTML('beforeend', card);
    return card;
}