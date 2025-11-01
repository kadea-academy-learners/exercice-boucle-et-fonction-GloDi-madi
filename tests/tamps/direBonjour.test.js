const { copyFile } = require("../utils/copy-file");

copyFile("01-direBonjour", "direBonjour");
const { direBonjour } = require("./tamps/01-direBonjour");
test('direBonjour affiche "Bonjour le monde" sur la console', () => {
  const spy = jest.spyOn(console, "log").mockImplementation(() => {});
  direBonjour();
  expect(spy).toHaveBeenCalledWith("Bonjour le monde");
  spy.mockRestore();
});

test("direBonjour ne retourne rien", () => {
  const result = direBonjour();
  expect(result).toBeUndefined();
});
