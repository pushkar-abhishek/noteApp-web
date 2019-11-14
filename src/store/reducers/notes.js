import {
    CREATE_NOTE,
    EDIT_NOTE,
    FETCH_NOTES
} from '../constants/notes';

const INITIAL_STATE =
    [{
        id: 1,
        title: "note title",
        data: "line1",
        style: {}
    }]


export const notes = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CREATE_NOTE:
            return { notes: [action.payload, ...state.notes] }
        case EDIT_NOTE:
            return {
                notes: state.notes.map(item => {
                    if (item.id == action.payload.id) return action.payload
                    return item
                })
            }
        case FETCH_NOTES:
            return state.notes

        default: return state;
    }
}
