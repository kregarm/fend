const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', () => {
    fetch('http://localhost:8081/test')
    .then(() => {
    })
    .catch((err) => {
    })
})