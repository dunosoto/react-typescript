import { getHeroeById, getHeroesByOwner } from '../../src/base-test/08-imp-exp';
import { Heroe } from '../../src/data/heroes';

describe('testing for 08-imp-exp', () => {

  test('getHeroeById should return hero by Id', () => {

    const id: number = 1;
    const hero: Heroe | undefined = getHeroeById(id);

    expect(hero).toEqual({
      id: 1,
      name: 'Batman',
      owner: 'DC'
    });
  });

  test('getHeroeById should return undefined if id does  not exits', () => {

    const id: number = 56;
    const hero: Heroe | undefined = getHeroeById(id);

    expect(hero).toEqual(undefined);
    expect(hero).toBeFalsy();
  });


  test('getHeroeByOwner should return only DC heroes', () => {

    const owner: string = 'DC';
    const dcHeroes: Heroe[] = getHeroesByOwner(owner);

    dcHeroes.forEach((hero: Heroe) => {
      expect(hero.owner).toBe(owner);
    });

    expect(dcHeroes.length).toBe(3);
  });

  test('getHeroeByOwner should return only Marvel heroes', () => {

    const owner: string = 'Marvel';
    const dcHeroes: Heroe[] = getHeroesByOwner(owner);

    expect(dcHeroes).toEqual(dcHeroes.filter((heroe: Heroe) => heroe.owner === owner));
    expect(dcHeroes.length).toBe(2);
  });
});