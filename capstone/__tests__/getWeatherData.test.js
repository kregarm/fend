import { getCurrentWeekForecast, getTimeMachineForecast } from '../src/client/js/getWeatherData';

describe("test", () => {
    test("it should do something", () => {
        expect(typeof getCurrentWeekForecast).toBe('function');
        expect(typeof getTimeMachineForecast).toBe('function');
    });
});