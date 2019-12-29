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
    postData('http://localhost:8081/test', { data })
        .then((data) => {
            console.log(data);
            document.getElementById('nlp-text').value = '';
        }).catch((err) => {
            console.log(err);
        })
})