test("shoud return 'hello pongneng'", () => {
  // Arrange
  const greet = require("../greet");
  // Act
  const result = greet("pongneng");
  // Assert
  expect(result).toBe("hello pongneng");
});
