const validateValue = require("./validateValue");

// See docs at:
// https://jestjs.io/docs/using-matchers

// Bad approach - several tests in one place
test("Value validation: ", 
     () => {
        expect(validateValue(-1)).toBe(false);
        expect(validateValue(0) ).toBe(false);
        expect(validateValue(50)).toBe(true);
        expect(validateValue(100)).toBe(false);
        expect(validateValue(101)).toBe(false);
     }
);

// Test scenario - several tests under one 'describe' clause (the same as Test Suite)
describe('Name of the group', () => {
   test("Out of range value validation: ", 
     () => { expect(validateValue(-2)).toBe(false); }
   );
   test("Bottom border value validation: ", 
     () => { expect(validateValue(0) ).toBe(false); }
   );
   test("Value validation: ", 
     () => { expect(validateValue(60)).toBe(true); }
   );
   test("Top border value validation: ", 
     () => { expect(validateValue(100)).toBe(false); }
   );
   test("Out of range value validation: ", 
     () => { expect(validateValue(102)).toBe(false); }
   );
});
