import './styles/app.scss'
import './styles/modal.scss'
import './styles/head.scss'

import './js/app'
import { displayTripsFromLocalStorage } from './js/displayTripsFromLocalStorage'
import { submit } from './js/app'
import { getGeoData } from './js/getGeoData'
import { postData } from './js/postData'
import { getWeatherData } from './js/getWeatherData'
import { getImages } from './js/getImages'

export { 
    displayTripsFromLocalStorage,
    submit,
    getGeoData,
    getWeatherData,
    postData,
    getImages
 }