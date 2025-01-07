import { getImagen } from '../../src/base-test/11-async-await';

describe('getImagen test for 11-async-await', () => {

  test('should return a gifs url', async() => {

    const url = await getImagen();
    // console.log(url);

  });
});