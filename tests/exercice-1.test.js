const { direBonjour } = require("../01-direBonjour");

let subtest = process.argv[3]?.split('=')[1];
let runAll = subtest == undefined;

if (subtest == 'a' || runAll)
  test('Exercice 1a: direBonjour affiche "Bonjour le monde" sur la console', () => {
    const spy = jest.spyOn(console, "log").mockImplementation(() => { });
    direBonjour();
    expect(spy).toHaveBeenCalledWith("Bonjour le monde");
    spy.mockRestore();
  });

if (subtest == 'b' || runAll)
  test("Exercice 1b: direBonjour ne retourne rien", () => {
    expect(direBonjour()).toBeUndefined();
  });
