const getRandomValue = require("./getRandomValue");

describe('Tests for strict values', () => {
    let counter = 0;

    beforeAll(() => { counter = 1 }); // will be run 1 time (before tests)
    beforeEach(() => { console.log(`Test of 'getRandomValue' function #${counter}`) });  // will be run before every test launching
    afterEach(() => { counter++ }); // will be run after every test launching
    afterAll(() => {  // will be run 1 time (after all tests launching)
        counter = 0;
        console.log("Tests finished !");
    });

    test("Top border: ", 
      () => { expect(getRandomValue()).toBeLessThan(1); }
    );
    test("Bottom border: ", 
      () => { expect(getRandomValue()).toBeGreaterThanOrEqual(0); }
    );
    test("Top border: ", 
      () => { expect(getRandomValue()).not.toBeGreaterThanOrEqual(1); }
    );
    test("Bottom border: ", 
      () => { expect(getRandomValue()).not.toBeLessThan(0); }
    );
 });

