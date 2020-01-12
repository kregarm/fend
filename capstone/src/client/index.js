import './styles/app.scss'

import './js/app'
import { displayTripsFromLocalStorage } from './js/displayTripsFromLocalStorage'
import { submit } from './js/app'
import { username, darkSkyApiKey } from '../../config'
import { getGeoData } from './js/getGeoData'
import { getWeatherData } from './js/getWeatherData'

export { 
    displayTripsFromLocalStorage,
    username,
    darkSkyApiKey,
    submit,
    getGeoData,
    getWeatherData
 }