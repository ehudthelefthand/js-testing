const { thumbwar } = require("../thumbwar2");

test("airmee should win", () => {
  const randomizer = {
    next: () => 0
  };
  const winner = thumbwar({
    player1: "pongneng",
    player2: "airmee",
    randomizer
  });
  expect(winner).toBe("airmee");
});
