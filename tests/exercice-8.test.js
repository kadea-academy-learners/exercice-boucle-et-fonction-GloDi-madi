const { somme } = require("../08-somme");

let subtest = process.argv[3]?.split('=')[1];
let runAll = subtest == undefined;

if (subtest == 'a' || runAll)
  test("Exercice 8a: somme(4) retourne 10", () => {
    expect(somme(4)).toBe(10);
  });

if (subtest == 'b' || runAll)
  test("Exercice 8b: somme(1) retourne 1", () => {
    expect(somme(1)).toBe(1);
  });

if (subtest == 'c' || runAll)
  test("Exercice 8c: somme(0) retourne 0", () => {
    expect(somme(0)).toBe(0);
  });

if (subtest == 'd' || runAll)
  test("Exercice 8d: somme(-1) retourne 0 lorsque n est inférieur à 0", () => {
    expect(somme(-1)).toBe(0);
  });
