import { Heroe } from '../data/heroes';
import { getHeroeById } from './08-imp-exp';


export const getHeroeByIdAsync = ( id: number ): Promise<Heroe> => {

  return new Promise<Heroe>( (resolve, reject) => {
    setTimeout( () =>  {
      const p1 = getHeroeById( id );
      if ( p1 ) {
        resolve( p1 );
      } else {
        reject( 'No se pudo encontrar el héroe' );
      }
    }, 1000 )
  
  });
}
