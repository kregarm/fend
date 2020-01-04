import { checkLive, showError } from '../src/client/js/offlineCheck';

describe("test", () => {
    test("it should do something", () => {
        expect(typeof checkLive).toBe('function');
        expect(typeof showError).toBe('function');
    })
})