import {
    CREATE_NOTE,
    EDIT_NOTE,
    FETCH_NOTES,
    SELECTED_NOTE,
    UNSELECT_NOTE
} from '../constants/notes';

const INITIAL_STATE =
{
    data: [],
    selectedNote: {}
}


export const notes = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CREATE_NOTE:
            return { ...state, data: [action.payload, ...state.data] }
        case EDIT_NOTE:
            return {
                ...state,
                data: state.data.map(item => {
                    if (item.id == action.payload.id) return action.payload
                    return item
                })
            }
        // case CREATE_NOTE:
        //     //update note if already exist or create
        //     const note = state.data.find(note => note.id == action.payload.id) || {}
        //     console.log(note)
        //     note.title = action.payload.title;
        //     note.data = action.payload.body
        //     if (!note.id) {
        //         note.id = new Date()
        //         console.log(note)
        //         return { ...state, data: [note, ...state.data] };
        //     }
        //     else return state;
        case FETCH_NOTES:
            return state.notes

        case SELECTED_NOTE:
            return {
                ...state,
                selectedNote: action.payload
            }
        case UNSELECT_NOTE:
            return {
                ...state,
                selectedNote: {}
            }
        default: return state;
    }
}
