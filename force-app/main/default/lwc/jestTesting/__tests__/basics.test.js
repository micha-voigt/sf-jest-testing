describe("Basics", () => {
  test("Basics: Equal and Truthiness", () => {
    const number = 1;

    expect(number).toBe(1);
    expect(1 + 1).toEqual(2);

    expect(null).toBeNull();
    expect(number).toBeDefined();

    expect(number).not.toBeNull();
    expect(number).not.toBeUndefined();

    expect(true).toBeTruthy();
    expect(false).toBeFalsy();
  });

  test("Basics: Numbers", () => {
    const value = 1;

    expect(value).toBeGreaterThan(0);
    expect(value).toBeGreaterThanOrEqual(1);
    expect(value).toBeLessThan(2);
    expect(value).toBeLessThanOrEqual(1);

    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(1);
    expect(value).toEqual(1);
  });

  test("Basics: Strings", () => {
    expect("team").not.toMatch(/something/);
    expect("All Stars Team").toMatch(/Stars/);
  });

  test("Basics: Arrays and Iterables", () => {
    const shoppingList = ["bread", "milk"];
    expect(shoppingList).toContain("milk");
  });

  test("Basics: Exceptions", () => {
    function compileAndroidCode() {
      throw new Error("you are using the wrong JDK");
    }

    expect(() => compileAndroidCode()).toThrow("you are using the wrong JDK");
    expect(() => compileAndroidCode()).toThrow(/wrong JDK/);
  });
});
