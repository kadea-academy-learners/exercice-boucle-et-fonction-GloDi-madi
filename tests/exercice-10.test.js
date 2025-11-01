const { nombreDeVoyelles } = require("../10-nombreDeVoyelle");

let subtest = process.argv[3]?.split('=')[1];
let runAll = subtest == undefined;

if (subtest == 'a' || runAll)
  test("nombreDeVoyelles('Bonjour') retourne 3", () => {
    const result = nombreDeVoyelles("Bonjour");
    expect(result).toBe(3);
  });

if (subtest == 'b' || runAll)
  test("nombreDeVoyelles('Bonjour le monde') retourne 6", () => {
    const result = nombreDeVoyelles("Bonjour le monde");
    expect(result).toBe(6);
  });
