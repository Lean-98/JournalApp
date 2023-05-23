import { createSlice } from '@reduxjs/toolkit';

export const journalSlices = createSlice({
    name: 'journal',
    initialState: { 
        isSaving:false,
        messageSaved: '',
        notes: [],
        active: null,
        // active: {
        //     id: 'ABC123',
        //     title: '',
        //     body: '',
        //     date: 1234567.
        //     imageUrls: [], // https://photo1.jpg, https://photo2.jpg, https://photo3.jpg
        // }
     },
     reducers: {
        savingNewNote: ( state ) => {
            state.isSaving = true;
        },
        addNewEmptyNote: ( state, action ) => {
            state.notes.push( action.payload );
            state.isSaving = false;
        },
        setActiveNote: ( state, action ) => {
            state.active = action.payload;
            state.messageSaved = '';
        },
        setNotes: ( state, action ) => {
            state.notes = action.payload;
        },
        setSaving: ( state ) => {
            state.isSaving = true;
            state.messageSaved = '';
        },
        noteUpdated: ( state, action ) => { // payload: note
            state.isSaving = false;
            state.notes = state.notes.map( note => {
                if( note.id === action.payload.id ) {
                    return action.payload;
                }

                return note;
            });

            state.messageSaved = `${ action.payload.title }, actualizada correctamente!`;
        },
        setPhotosActiveNote: ( state, action ) => {
            state.active.imageUrls = [ ...state.active.imageUrls?.length ? state.active.imageUrls : [], ...action.payload ];
            state.isSaving = false;
        },
        clearNotesLogout: ( state ) => {
            state.isSaving = false;
            state.messageSaved = '';
            state.notes = [];
            state.active = null;
        },
        deleteNoteById: ( state, action ) => {
            state.active = null;
            state.notes = state.notes.filter( note => note.id !== action.payload );
        },
    }
});

export const { 
    addNewEmptyNote, 
    clearNotesLogout, 
    deleteNoteById, 
    noteUpdated, 
    savingNewNote, 
    setActiveNote, 
    setNotes, 
    setPhotosActiveNote,
    setSaving, 
} = journalSlices.actions;