import {
    CREATE_NOTE,
    EDIT_NOTE,
    FETCH_NOTES
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