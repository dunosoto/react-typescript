import { getHeroeByIdAsync } from '../../src/base-test/09-promesas';
import { Heroe } from '../../src/data/heroes';

describe('testing in 09-promesas', () => {



  test('getHeroeByIdAsync should return a Hero', (done) => {

    const id: number = 1;
    getHeroeByIdAsync(1)
      .then((hero: Heroe) => {
        expect(hero).toStrictEqual({
          id: 1,
          name: 'Batman',
          owner: 'DC'
        });
        done();
      });

  });

  test('getHeroeByIdAsync should return an error if a hero does not exits', (done) => {

    const id: number = 100;
    getHeroeByIdAsync(id)
      .catch( error => {
        expect(error).toBe('No se pudo encontrar el héroe');
        done()
      });

  });
})