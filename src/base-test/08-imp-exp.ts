import { heroes, Heroe } from '../data/heroes';

export const getHeroeById = (id: number): Heroe | undefined => {
  return heroes.find( (heroe: Heroe): boolean => heroe.id === id );
};

export const getHeroesByOwner = ( owner: string ): Heroe[] => {
  return heroes.filter( (heroe: Heroe) => heroe.owner === owner )
};


