import './styles/app.scss'
import './styles/modal.scss'
import './styles/head.scss'

import './js/app'
import { displayTripsFromLocalStorage } from './js/displayTripsFromLocalStorage'
import { submit } from './js/app'
import { username, darkSkyApiKey } from '../../config'
import { getGeoData } from './js/getGeoData'
import { postData } from './js/postData'
import { getWeatherData } from './js/getWeatherData'

export { 
    displayTripsFromLocalStorage,
    username,
    darkSkyApiKey,
    submit,
    getGeoData,
    getWeatherData,
    postData
 }