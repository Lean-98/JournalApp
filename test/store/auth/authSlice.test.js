import { authSlices, checkingCredentials, login, logout } from '../../../src/store/auth/authSlices';
import { authenticatedState, demoUser, initialState } from '../../fixtures/authFixtures';

describe('Pruebas en el authSlice', () => { 

        test('debe de regresar el estado inicial y llamarse "auth"', () => {  

            const state = authSlices.reducer( initialState, {});

            expect( state ).toEqual( initialState );
            expect( authSlices.name ).toBe('auth');

        });

        test('debe de realizar la autenticación', () => { 

            // console.log(login(demoUser));
            const state = authSlices.reducer( initialState, login( demoUser ));
            // console.log(state)
            expect( state ).toEqual({
                status: 'authenticated', 
                uid: demoUser.uid,
                email: demoUser.email,
                displayName: demoUser.displayName,
                photoURL: demoUser.photoURL,
                errorMessage: null,
            });
        });

        test('debe de realizar el logout', () => { 

            const state = authSlices.reducer( authenticatedState, logout());
            // console.log(state)
            expect( state ).toEqual({
                status: 'not-authenticated', 
                uid: null,
                email: null,
                displayName: null,
                photoURL: null,
                errorMessage: undefined,
            });

        });

        test('debe de realizar el logout y mostrar un mensaje de error', () => { 

            const errorMessage = 'Las Credenciales no son correctas';

            const state = authSlices.reducer( authenticatedState, logout({ errorMessage }));
            // console.log(state)
            expect( state ).toEqual({
                status: 'not-authenticated', 
                uid: null,
                email: null,
                displayName: null,
                photoURL: null,
                errorMessage: errorMessage
                });
            });

        test('debe de cambiar el estado a checking', () => { 

            const state = authSlices.reducer( authenticatedState, checkingCredentials() );
            expect( state.status ).toBe('checking');
         })
            
});
