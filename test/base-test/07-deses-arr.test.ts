import { retornaArreglo } from '../../src/base-test/07-deses-arr';

describe('testing for 07-deses-arr', () => {

  test('should return string and number', () => {

    const [letters, numbers]: [string, number] = retornaArreglo();
  
    expect(letters).toBe('ABC');
    expect(numbers).toBe(123);
  
    expect(typeof letters).toBe('string');
    expect(typeof numbers).toBe('number');

    expect(letters).toStrictEqual(expect.any(String));

  });
})