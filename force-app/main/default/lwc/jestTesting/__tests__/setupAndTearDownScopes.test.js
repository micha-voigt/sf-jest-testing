beforeAll(() => {
  console.log("Before all test suites in this file");
});

afterAll(() => {
  console.log("After all test suites in this file");
});

describe("Setup&Teardown Test Suite 1", () => {
  beforeAll(() => {
    console.log("Before all tests in Test Suite 1");
  });

  afterAll(() => {
    console.log("After all tests in Test Suite 1");
  });

  beforeEach(() => {
    console.log("Before each test in Test Suite 1");
  });

  afterEach(() => {
    console.log("After each test in Test Suite 1");
  });

  test("Setup&Teardown Test 1", () => {
    console.log("Executing Test 1");
    expect(true).toBe(true);
  });

  test("Setup&Teardown Test 2", () => {
    console.log("Executing Test 2");
    expect(true).toBe(true);
  });
});

describe("Setup&Teardown Test Suite 2", () => {
  beforeAll(() => {
    console.log("Before all tests in Test Suite 2");
  });

  afterAll(() => {
    console.log("After all tests in Test Suite 2");
  });

  beforeEach(() => {
    console.log("Before each test in Test Suite 2");
  });

  afterEach(() => {
    console.log("After each test in Test Suite 2");
  });

  test("Setup&Teardown Test 3", () => {
    console.log("Executing Test 3");
    expect(true).toBe(true);
  });

  test("Setup&Teardown Test 4", () => {
    console.log("Executing Test 4");
    expect(true).toBe(true);
  });
});
