const { factorielle } = require("../09-factorielle.js");

let subtest = process.argv[3]?.split('=')[1];
let runAll = subtest == undefined;

if (subtest == 'a' || runAll)
  test("Exercice 9a: factorielle(1) retourne 1", () => {
    expect(factorielle(1)).toBe(1);
  });

if (subtest == 'b' || runAll)
  test("Exercice 9b: factorielle(0) retourne 1", () => {
    expect(factorielle(0)).toBe(1);
  });

if (subtest == 'c' || runAll)
  test("Exercice 9c: factorielle(-1) retourne 0 lorsque n est inférieur à 0", () => {
    expect(factorielle(-1)).toBe(0);
  });

if (subtest == 'd' || runAll)
  test("Exercice 9d: factorielle(5) retourne 120", () => {
    expect(factorielle(5)).toBe(120);
    expect(factorielle(4)).toBe(24);
  });
