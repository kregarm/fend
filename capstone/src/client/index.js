import './styles/app.scss'
import './styles/modal.scss'
import './styles/head.scss'
import './styles/new-trip.scss'
import './styles/images.scss'
import './styles/todo.scss'
import './styles/weather.scss'
import './styles/mobile.scss'


import './js/app'
import { submit } from './js/app'
import { getGeoData } from './js/getGeoData'
import { postData } from './js/postData'
import { getCurrentWeekForecast, getTimeMachineForecast } from './js/getWeatherData'
import { getImages } from './js/getImages'
import { getMap } from './js/getMap'
import { storeLocationData, storeImages, storeMapImage, storeToDoItem, toggleTodo } from './js/storeTripData'
import { setTripText, setImages, displayTripsFromLocalStorage, setMapImage, displayModal, displayTodos, displayWeatherForecast, displayTimeMachineForecast } from './js/setView'
import { tripSwitch } from './js/tripSwitch'
import { dismissModal } from './js/dismissModal'

export { 
    displayTripsFromLocalStorage,
    submit,
    getGeoData,
    getCurrentWeekForecast,
    postData,
    getImages,
    storeLocationData,
    storeImages,
    setTripText,
    setImages,
    tripSwitch,
    getMap,
    setMapImage,
    storeMapImage,
    displayModal,
    storeToDoItem,
    displayTodos,
    toggleTodo,
    getTimeMachineForecast,
    displayWeatherForecast,
    displayTimeMachineForecast,
    dismissModal
 }