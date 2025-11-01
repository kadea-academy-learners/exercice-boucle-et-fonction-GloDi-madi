const { copyFile } = require("../../utils/copy-file");
copyFile("03-multiplication", "multiplication");
const { multiplication } = require("./tamps/03-multiplication");
test("multiplication(2, 3) retourne 6", () => {
  const result = multiplication(2, 3);
  expect(result).toBe(6);
});
test("multiplication(0, 5) retourne 0", () => {
  const result = multiplication(0, 5);
  expect(result).toBe(0);
});
test("multiplication(-2, 3) retourne -6", () => {
  const result = multiplication(-2, 3);
  expect(result).toBe(-6);
});
test("multiplication(2, -3) retourne -6", () => {
  const result = multiplication(2, -3);
  expect(result).toBe(-6);
});
test("multiplication(-2, -3) retourne 6", () => {
  const result = multiplication(-2, -3);
  expect(result).toBe(6);
});
test("multiplication(2, 0) retourne 0", () => {
  const result = multiplication(2, 0);
  expect(result).toBe(0);
});
test("multiplication('2', 3) retourne undefined", () => {
  const result = multiplication("2", 3);
  expect(result).toBeUndefined();
});
test("multiplication(2, '3') retourne undefined", () => {
  const result = multiplication(2, "3");
  expect(result).toBeUndefined();
});
test("multiplication(null, 3) retourne undefined", () => {
  const result = multiplication(null, 3);
  expect(result).toBeUndefined();
});
test("multiplication(undefined, 3) retourne undefined", () => {
  const result = multiplication(undefined, 3);
  expect(result).toBeUndefined();
});
test("multiplication({}, 3) retourne undefined", () => {
  const result = multiplication({}, 3);
  expect(result).toBeUndefined();
});
test("multiplication([], 3) retourne undefined", () => {
  const result = multiplication([], 3);
  expect(result).toBeUndefined();
});
test("multiplication() retourne undefined", () => {
  const result = multiplication();
  expect(result).toBeUndefined();
});
test("multiplication(2) retourne undefined", () => {
  const result = multiplication(2);
  expect(result).toBeUndefined();
});
