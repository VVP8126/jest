const squareIfNotZeroOrOne = require("./squareIfNotZeroOrOne");

describe('Tests for square', () => {
    
    // Mock-testing of method 'Math.pow' call
    const spy = jest.spyOn(Math, "pow");

    // Clear mock after every test (mock-objet saves number of calls in TestSuite):
    afterEach(() => {
        jest.clearAllMocks();
    });

    test("Check for Math.pow not called (value = 0):", 
      () => { 
        squareIfNotZeroOrOne(0);
        expect(spy).toBeCalledTimes(0);
      }
    );
    test("Check for Math.pow not called (value = 1):", 
      () => {
        squareIfNotZeroOrOne(1);
        expect(spy).toBeCalledTimes(0);
      }
    );
    test("Check for Math.pow not called (value = 2):", 
      () => {
        squareIfNotZeroOrOne(2);
        expect(spy).toBeCalledTimes(1);
      }
    );
    test("Check for Math.pow not called (value = 3):", 
      () => {
        squareIfNotZeroOrOne(3);
        expect(spy).toBeCalledTimes(1);
      }
    );
 });