const axios = require("axios");
const getData = require("./getData");

describe('Test for quantity of result', () => {
  test("Get data from server and check it count:", 
    async () => {
      const data = await getData();
      expect(data.length).toBe(10); // 10 items available on site: https://jsonplaceholder.typicode.com/
    }
  );
});
