const { multiplication } = require("../03-multiplication");

let subtest = process.argv[3]?.split('=')[1];
let runAll = subtest == undefined;

if (subtest == 'a' || runAll)
  test("Exercice 3a: multiplication(-2, 3) retourne -6", () => {
    expect(multiplication(-2, 3)).toBe(-6);
    expect(multiplication(4.5, -2)).toBe(-9);
  });

if (subtest == 'b' || runAll)
  test("Exercice 3b: multiplication(2, 3) retourne 6", () => {
    expect(multiplication(2, 3)).toBe(6);
    expect(multiplication(-2, -3)).toBe(6);
  });

if (subtest == 'c' || runAll)
  test("Exercice 3c: multiplication(2, 0) retourne 0", () => {
    expect(multiplication(2, 0)).toBe(0);
    expect(multiplication(0, -9.3)).toBe(0);
    expect(multiplication(0, 5)).toBe(0);
  });

if (subtest == 'd' || runAll)
  test("Exercice 3d: multiplication() retourne `undefined` pour arguments de mauvais types", () => {
    expect(multiplication("2", 3)).toBeUndefined();
    expect(multiplication(2, "3")).toBeUndefined();
    expect(multiplication(null, 3)).toBeUndefined();
    expect(multiplication(undefined, 3)).toBeUndefined();
    expect(multiplication({}, 3)).toBeUndefined();
    expect(multiplication([], 3)).toBeUndefined();
  });

if (subtest == 'e' || runAll)
  test("Exercice 3e: multiplication() retourne `undefined` pour nombre d'arguments incorrect", () => {
    expect(multiplication()).toBeUndefined();
    expect(multiplication(2)).toBeUndefined();
  });
