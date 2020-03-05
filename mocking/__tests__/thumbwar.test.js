const { thumbwar } = require("../thumbwar");

test("pongneng should win", () => {
  const winner = thumbwar("pongneng", "airmee");
  expect(winner).toBe("pongneng");
});
