test("should return '1'", () => {
  // Arrange
  const fizzbuzz = require("../fizzbuzz");
  // Act
  const result = fizzbuzz(1);
  // Assert
  expect(result).toBe("1");
});

test("should return '2'", () => {
  // Arrange
  const fizzbuzz = require("../fizzbuzz");
  // Act
  const result = fizzbuzz(2);
  // Assert
  expect(result).toBe("2");
});

test("should return 'fizz'", () => {
  // Arrange
  const fizzbuzz = require("../fizzbuzz");
  // Act
  const result = fizzbuzz(3);
  // Assert
  expect(result).toBe("fizz");
});

test("should return 'buzz'", () => {
  // Arrange
  const fizzbuzz = require("../fizzbuzz");
  // Act
  const result = fizzbuzz(5);
  // Assert
  expect(result).toBe("buzz");
});

test("should return 'fizzbuzz'", () => {
  // Arrange
  const fizzbuzz = require("../fizzbuzz");
  // Act
  const result = fizzbuzz(15);
  // Assert
  expect(result).toBe("fizzbuzz");
});
