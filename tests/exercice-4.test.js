const { estImpair } = require("../04-estImpair");

let subtest = process.argv[3]?.split('=')[1];
let runAll = subtest == undefined;

if (subtest == 'a' || runAll)
  test("Exercice 4a: estImpair(3) retourne true", () => {
    expect(estImpair(3)).toBe(true);
    expect(estImpair(-3)).toBe(true);
    expect(estImpair(2.0)).toBe(false);
  });

if (subtest == 'b' || runAll)
  test("Exercice 4b: estImpair(4) retourne false", () => {
    expect(estImpair(4)).toBe(false);
    expect(estImpair(0)).toBe(false);
    expect(estImpair(-4)).toBe(false);
    expect(estImpair(2.5)).toBe(false);
  });

if (subtest == 'c' || runAll)
  test("Exercice 4c: estImpair() retourne null pour mauvais types", () => {
    expect(estImpair("3")).toBeNull();
    expect(estImpair(null)).toBeNull();
    expect(estImpair(undefined)).toBeNull();
    expect(estImpair([])).toBeNull();
    expect(estImpair({})).toBeNull();
    expect(estImpair(NaN)).toBeNull();
    expect(estImpair(true)).toBeNull();
    expect(estImpair(false)).toBeNull();
  });
