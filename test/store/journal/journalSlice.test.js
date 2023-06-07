import { addNewEmptyNote, journalSlices, savingNewNote, setActiveNote } from "../../../src/store/journal";
import { initialState } from "../../fixtures/authFixtures";

describe('Pruebas en el journalSlice', () => { 

    test('debe de regresar el estado inicial y llamarse "journal"', () => { 
        
        const state = journalSlices.reducer( initialState, {});

        expect( state ).toEqual( initialState );
        expect( journalSlices.name ).toBe('journal');

     });

     test('debe de realizar savingNewNote', () => { 

        const state = journalSlices.reducer( initialState, savingNewNote() );
        expect( state.isSaving ).toBe(true);

      });

     test('debe de realizar setActiveNote', () => { 

        const state = journalSlices.reducer( initialState, setActiveNote() );
        // console.log(state)
        expect( state ).toEqual(    {
            status: 'checking',
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: null,
            active: undefined,
            messageSaved: ''
          });

      });
     

 });