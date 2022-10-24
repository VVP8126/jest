const filterIntegers = require("./filterIntegers");

// See docs for "expect" functions:
// https://jestjs.io/docs/expect

const result = [0, 1, 2];

describe('Tests for strict values', () => {
   test("Only integers: ", 
     () => { expect(filterIntegers([0, 1, 2])).toStrictEqual(result); }
   );
   test("Array with integers, doubles: ", 
     () => { expect(filterIntegers([0, 1, 2, 0.1])).toStrictEqual(result); }
   );
   test("Array with integers, strings as integers and doubles: ", 
     () => { expect(filterIntegers([0, 1, 2, 0.1, "1"])).toStrictEqual(result); }
   );
   test("Array with integers, stupid strings: ", 
     () => { expect(filterIntegers([0, 1, 2, 0.1, "one"])).toStrictEqual(result); }
   );
});

describe('Tests for contained values', () => {
  test("Only integers: ", 
    () => { expect(filterIntegers([1, 0, 2])).toContain(result[0]); }
  );
  test("Array with integers, doubles: ", 
    () => { expect(filterIntegers([2, 1, 0, 0.1])).toContain(result[1]); }
  );
  test("Array with integers, strings as integers and doubles: ", 
    () => { expect(filterIntegers([2, 0, 1, 0.1, "1"])).toContain(result[2]); }
  );
  test("Array with integers, stupid strings: ", 
    () => { expect(filterIntegers([0, 2, 1, 0.1, "one"])).toContain(result[0]); }
  );
});

describe('Tests for subarray containing', () => {
  const expected = [0, 1, 2];
  const notExpected = [0, 1, 3];
  it("Only integers: ", 
    () => { expect(filterIntegers([1, 0, 2])).toEqual(expect.arrayContaining(expected)); }
  );
  it("Not contained element in expected array: ", 
    () => { expect(filterIntegers([1, 0, 2])).not.toEqual(expect.arrayContaining(notExpected)); }
  );
  it("Array with integers, doubles: ", 
    () => { expect(filterIntegers([2, 1, 0, 0.1])).toEqual(expect.arrayContaining(expected)); }
  );
  it("Array with integers, strings as integers and doubles: ", 
    () => { expect(filterIntegers([2, 0, 1, 0.1, "1"])).toEqual(expect.arrayContaining(expected)); }
  );
  it("Array with integers, stupid strings: ", 
    () => { expect(filterIntegers([0, 2, 1, 0.1, "one"])).toEqual(expect.arrayContaining(expected)); }
  );
});
