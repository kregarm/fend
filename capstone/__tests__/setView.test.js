import { 
    setTripText, 
    setImages, 
    displayTripsFromLocalStorage, 
    setMapImage, 
    displayModal, 
    displayTodos, 
    displayWeatherForecast, 
    displayTimeMachineForecast 
    } from '../src/client/js/setView';

describe("test", () => {
    test("it should do something", () => {
        expect(typeof setTripText).toBe('function');
        expect(typeof setImages).toBe('function');
        expect(typeof displayTripsFromLocalStorage).toBe('function');
        expect(typeof displayModal).toBe('function');
        expect(typeof displayTodos).toBe('function');
        expect(typeof displayWeatherForecast).toBe('function');
        expect(typeof setMapImage).toBe('function');
        expect(typeof displayTimeMachineForecast).toBe('function');
    });
});