const { compteARebours } = require("../07-compteARebours");

let subtest = process.argv[3]?.split('=')[1];
let runAll = subtest == undefined;

if (subtest == 'a' || runAll)
  test("Exercice 7a: compteARebours affiche les nombres de 10 à 1", () => {
    const spy = jest.spyOn(console, "log").mockImplementation(() => { });
    compteARebours();
    const calls = spy.mock.calls.map((call) => call[0]);
    expect(calls).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
    spy.mockRestore();
  });

if (subtest == 'b' || runAll)
  test("Exercice 7b: compteARebours affiche 10 logs", () => {
    const spy = jest.spyOn(console, "log").mockImplementation(() => { });
    compteARebours();
    expect(spy).toHaveBeenCalledTimes(10);
    spy.mockRestore();
  });
