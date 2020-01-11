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
};
function sendData() {
    let data = document.getElementById('nlp-text').value;
    // Check if the input actually containes something
    if (data.length < 1) {
        alert("Can't evaluate nothing, dummy");
    } else {
        postData('http://localhost:8081/test', { data })
            .then((res) => {
                let emptyStateCopy = document.getElementById('empty-state');
                emptyStateCopy.parentNode.removeChild(emptyStateCopy);
                document.getElementById('nlp-text').value = '';
                let card = `
                    <div class="col s12 m6">
                        <div class="card blue-grey darken-1">
                            <div class="card-content white-text">
                                <span class="card-title">Evaluated text:</span>
                                <p><em>${res.text}</em></p>
                                <hr />
                                <p><b>Polarity:</b> ${res.polarity}, <b>confidence:</b> ${res.polarity_confidence}</p>
                                <p><b>Subjectivity:</b> ${res.subjectivity}, <b>confidence:</b> ${res.subjectivity_confidence}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    `
                let cardHolder = document.getElementById("cards-holder");
                cardHolder.insertAdjacentHTML('beforeend', card);
            }).catch((err) => {
                console.log(err);
            });
    };
};
export { postData, sendData };