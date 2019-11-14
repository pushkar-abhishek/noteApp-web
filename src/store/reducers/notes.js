import {
    CREATE_NOTE,
    EDIT_NOTE,
    FETCH_NOTES,
    SELECTED_NOTE,
    UNSELECTED_NOTE
} from '../constants/notes';
import { log } from 'util';

const INITIAL_STATE =
{
    data: [{
        id: 1,
        title: "note title",
        data: "line1"
    }],
    selectedNote: {}
}


export const notes = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // case CREATE_NOTE:
        //     return { ...state, data: [action.payload, ...state.data] }
        // case EDIT_NOTE:
        //     return {
        //         ...state,
        //         notes: state.map(item => {
        //             if (item.id == action.payload.id) return action.payload
        //             return item
        //         })
        //     }
        case CREATE_NOTE:
            //update note if already exist or create
            const note = state.data.find(note => note.id == action.payload.id) || {}
            note.id = note.id || new Date();
            note.title = action.payload.title;
            note.data = action.payload.body
            return { ...state, data: [note, ...state.data] };
        // if (!Object.keys(note).length) {
        //     note.id = new Date();
        //     return {
        //         ...state,
        //         data: [note, ...state.data]
        //     }
        // }
        case FETCH_NOTES:
            return state.notes

        case SELECTED_NOTE:
            return {
                ...state,
                selectedNote: action.payload
            }



        default: return state;
    }
}
