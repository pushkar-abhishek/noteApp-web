import {
    CREATE_NOTE,
    EDIT_NOTE,
    FETCH_NOTES,
    SELECTED_NOTE
} from '../constants/notes';


export const createNote = (data) => ({
    type: CREATE_NOTE,
    payload: data
});

export const editNote = data => ({
    type: EDIT_NOTE,
    payload: data
});

export const fetchNotes = () => ({
    type: FETCH_NOTES
})

export const selectedNote = (data) => ({
    type: SELECTED_NOTE,
    payload: data
})