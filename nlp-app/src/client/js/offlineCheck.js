let online = true;

function checkLive () {
    const textArea = document.getElementById('nlp-text');
    fetch('http://localhost:8081/live')
    .then(() => {
        if(!online){
            textArea.disabled = false;
            online = true;
        }
    })
    .catch((err) => {
        if (online) {
            showError(err);
            textArea.disabled = true;
            online = false;
        }
    })
};

function showError(err){
    alert(`This page is offline: '${err}`);
};
setInterval(checkLive, 2000);

export { checkLive, showError }