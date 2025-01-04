import { UserActive, getUser, getUsuarioActivo } from '../../src/base-test/05-funciones';


describe('testing in 05-funciones', () => { 

  test('getUser should return a User object', () => { 
    
    const testUser: UserActive = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    };

    const user: UserActive = getUser();

    expect(testUser).toEqual(user);

  });

  test('getUsuarioActivo should return a object', () => {

    const name: string = 'Daniel';

    const testUserActive: UserActive = {
      uid: 'ABC567',
      username: name
    };

    const userActive: UserActive = getUsuarioActivo(name);

    expect(testUserActive).toStrictEqual(userActive);
  })
});