const { saluer } = require("../02-saluer");

let subtest = process.argv[3]?.split('=')[1];
let runAll = subtest == undefined;

if (subtest == 'a' || runAll)
  test('Exercice 2a: saluer affiche "Bonjour, [nom]" sur la console', () => {
    const spy = jest.spyOn(console, "log").mockImplementation(() => { });
    saluer("Alice");
    expect(spy).toHaveBeenCalledWith("Bonjour, Alice");
    spy.mockRestore();
  });

if (subtest == 'b' || runAll)
  test('Exercice 2b: saluer affiche "Bonjour, inconnu" sur la console si aucun nom n\'est fourni', () => {
    const spy = jest.spyOn(console, "log").mockImplementation(() => { });
    saluer();
    expect(spy).toHaveBeenCalledWith("Bonjour, inconnu");
    spy.mockRestore();
  });

if (subtest == 'c' || runAll)
  test("Exercice 2c: saluer ne retourne rien", () => {
    const result = saluer("Alice");
    expect(result).toBeUndefined();
  });

if (subtest == 'd' || runAll)
  test("Exercice 2d: saluer ne retourne rien si aucun nom n'est fourni", () => {
    const result = saluer();
    expect(result).toBeUndefined();
  });
