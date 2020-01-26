import { 
    storeLocationData, 
    storeImages,
    storeMapImage, 
    storeToDoItem, 
    toggleTodo
    } from '../src/client/js/storeTripData';

describe("test", () => {
    test("it should do something", () => {
        expect(typeof storeLocationData).toBe('function');
        expect(typeof storeImages).toBe('function');
        expect(typeof storeMapImage).toBe('function');
        expect(typeof storeToDoItem).toBe('function');
        expect(typeof toggleTodo).toBe('function');
    });
});