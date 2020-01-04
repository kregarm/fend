import { postData } from '../src/client/js/client';

describe("test", () => {
    test("it should do something", () => {
        expect(typeof postData).toBe('function');
    })
})