import sum from "../sum";

describe("Sum function: ", () => {
  test("should return sum of two values", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
