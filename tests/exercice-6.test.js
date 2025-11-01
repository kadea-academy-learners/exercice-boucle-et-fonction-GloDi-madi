const { maxDeTrois } = require("../06-maxDeTrois");

let subtest = process.argv[3]?.split('=')[1];
let runAll = subtest == undefined;

if (subtest == 'a' || runAll)
  test("Exercice 6a: maxDeTrois(x, x, x) retourne 'Les trois nombres sont égaux'", () => {
    expect(maxDeTrois(5, 5, 5)).toBe("Les trois nombres sont égaux");
    expect(maxDeTrois(0, 0, 0)).toBe("Les trois nombres sont égaux");
    expect(maxDeTrois(-9.2, -9.2, -9.2)).toBe("Les trois nombres sont égaux");
  });

if (subtest == 'b' || runAll)
  test("Exercice 6b: maxDeTrois(a, b, c) retourne le plus grand", () => {
    expect(maxDeTrois(5, 10, 15)).toBe(15);
    expect(maxDeTrois(10, 5, 0)).toBe(10);
    expect(maxDeTrois(5, 15, 10)).toBe(15);
    expect(maxDeTrois(-5, -10, -15)).toBe(-5);
    expect(maxDeTrois(0, -5, -15)).toBe(0);
    expect(maxDeTrois(-15, -10, -5)).toBe(-5);
  });

if (subtest == 'c' || runAll)
  test("Exercice 6c: maxDeTrois() retourne null si au moins un argument n'est pas un nombre", () => {
    expect(maxDeTrois(5, 10, "15")).toBeNull();
    expect(maxDeTrois(5, "10", 15)).toBeNull();
    expect(maxDeTrois("5", 10, 15)).toBeNull();
    expect(maxDeTrois(5, 10, null)).toBeNull();
    expect(maxDeTrois(5, undefined, 15)).toBeNull();
    expect(maxDeTrois([], 10, 15)).toBeNull();
    expect(maxDeTrois({}, 10, 15)).toBeNull();
  });

if (subtest == 'd' || runAll)
  test("Exercice 6d: maxDeTrois() retourne null si le nombre d'arguments n'est pas bon", () => {
    expect(maxDeTrois()).toBeNull();
    expect(maxDeTrois(5)).toBeNull();
    expect(maxDeTrois(5, 10)).toBeNull();
    expect(maxDeTrois(5, 10, 15, 20)).toBeNull();
  });
