const squareIfNotZeroOrOne = require("./squareIfNotZeroOrOne");

describe('Tests for square', () => {
    test("Square 0:", 
      () => { expect(squareIfNotZeroOrOne(0)).toBe(0); }
    );
    test("Square 1:", 
      () => { expect(squareIfNotZeroOrOne(1)).toBe(1); }
    );
    test("Square 1.5:", 
      () => { expect(squareIfNotZeroOrOne(1.5)).toEqual(expect.closeTo(2.25, 5)); } // 5 - number of digits to check after the decimal point
    );
    test("Square 2:", 
      () => { expect(squareIfNotZeroOrOne(2)).toBe(4); }
    );
    test("Square 3:", 
      () => { expect(squareIfNotZeroOrOne(3)).toBe(9); }
    );
    
 });
