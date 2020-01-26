import { postData } from '../src/client/js/postData';

describe("test", () => {
    test("it should do something", () => {
        expect(typeof postData).toBe('function');
    });
});