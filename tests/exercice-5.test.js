const { max } = require("../05-max");

let subtest = process.argv[3]?.split('=')[1];
let runAll = subtest == undefined;

if (subtest == 'a' || runAll)
  test("Exercice 5a: max(5, 10) retourne 10", () => {
    expect(max(5, 10)).toBe(10);
    expect(max(10, 5)).toBe(10);
  });

if (subtest == 'b' || runAll)
  test("Exercice 5b: max(5, 5) retourne 'Les deux nombres sont égaux'", () => {
    expect(max(5, 5)).toBe("Les deux nombres sont égaux");
    expect(max(0, 0)).toBe("Les deux nombres sont égaux");
  });

if (subtest == 'c' || runAll)
  test("Exercice 5c: max(-5, -10) retourne -5", () => {
    expect(max(-5, -10)).toBe(-5);
    expect(max(-10, -5)).toBe(-5);
  });

if (subtest == 'd' || runAll)
  test("Exercice 5d: max('5', 10) retourne null si un argument n'est pas un nombre", () => {
    expect(max("5", 10)).toBeNull();
    expect(max(5, "10")).toBeNull();
    expect(max("5", "10")).toBeNull();
    expect(max(undefined, 10)).toBeNull();
    expect(max(5, null)).toBeNull();
    expect(max([], 10)).toBeNull();
    expect(max({}, 10)).toBeNull();
  });

if (subtest == 'e' || runAll)
  test("Exercice 5e: max() retourne null si aucun argument n'est fourni", () => {
    expect(max()).toBeNull();
  });
