const functionWithDelay = require("./functionWithDelay");

describe('Tests for async functions', () => {
    test("Async function test:", 
      async () => {
        const sum = await functionWithDelay(() => 1+2, 1000);
        expect(sum).toBe(3);
      }
    );
});
