import './styles/app.scss'
import './styles/modal.scss'
import './styles/head.scss'
import './styles/images.scss'

import './js/app'
import { submit } from './js/app'
import { getGeoData } from './js/getGeoData'
import { postData } from './js/postData'
import { getWeatherData } from './js/getWeatherData'
import { getImages } from './js/getImages'
import { getMap } from './js/getMap'
import { storeLocationData, storeImages, storeMapImage } from './js/storeTripData'
import { setTripText, setImages, displayTripsFromLocalStorage, setMapImage } from './js/setView'
import { tripSwitch } from './js/tripSwitch'

export { 
    displayTripsFromLocalStorage,
    submit,
    getGeoData,
    getWeatherData,
    postData,
    getImages,
    storeLocationData,
    storeImages,
    setTripText,
    setImages,
    tripSwitch,
    getMap,
    setMapImage,
    storeMapImage
 }