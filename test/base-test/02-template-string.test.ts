import { getSaludo } from "../../src/base-test/02-template-string";

describe('test into 02-template', () => {

  test('getSaludo should be return "Hola Daniel"', () => {

    const name = 'Daniel';
    const message = getSaludo(name);

    expect(message).toBe(`Hola ${name}`);
  });

});