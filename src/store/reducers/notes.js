import {
    CREATE_NOTE,
    EDIT_NOTE,
    FETCH_NOTES,
    SELECTED_NOTE
} from '../constants/notes';

const INITIAL_STATE =
{
    data: [{
        id: 1,
        title: "note title",
        data: "line1",

    }],
    selectedNote: {}

}


export const notes = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CREATE_NOTE:
            return { ...state, data: [action.payload, ...state.data] }
        case EDIT_NOTE:
            return {
                ...state,
                notes: state.map(item => {
                    if (item.id == action.payload.id) return action.payload
                    return item
                })
            }
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
