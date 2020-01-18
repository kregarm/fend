function setTripText (text) {
    document.getElementById('trip-destination').textContent = text;
}

function setImages (images) {
    const imageSection = document.getElementById('images')
    const pageFragement = document.createDocumentFragment();

    for (let image of images) {
        const divTag = document.createElement('div');
        divTag.setAttribute('class', 'image-placeholder')
        const imgTag = document.createElement('img');
        imgTag.setAttribute('src', image.webformatURL);
        imgTag.setAttribute('alt', image.tags);
        imgTag.setAttribute('class', 'grid-item');
        divTag.appendChild(imgTag);
        pageFragement.appendChild(divTag);
    }

    imageSection.appendChild(pageFragement)
}
export { setTripText, setImages }