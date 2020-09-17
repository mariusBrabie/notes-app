import  { getID, whenCreated, getNotes } from '../actionTypes/functions'

const notesReducer = (state = getNotes(), action) => {
    switch(action.type) {
        case 'ADD_NOTE':
            return [...state, {
                title: action.payload.title,
                body: action.payload.body,
                id: getID(),
                createdAt: whenCreated(),
                lastEdited: whenCreated()
            }]
        case 'REMOVE_NOTE':
            return state.filter(note => {
                return note.id !== action.payload
            })
        case 'EDIT_NOTE':
            return state.map(note => {
                if (note.id === action.payload.id) {
                    return {
                        title: action.payload.title,
                        body: action.payload.body,
                        id: note.id, 
                        createdAt: note.createdAt, 
                        lastEdited: action.payload.lastEdited
                    }
                }else{
                    return {
                        title: note.title, 
                        body: note.body, 
                        id: note.id, 
                        createdAt: note.createdAt, 
                        lastEdited: note.lastEdited
                    }
                }
            })
        case 'CHANGE_ID':
            return state.map(note => {
                return {
                    title: note.title, 
                    body: note.body, 
                    id: action.payload, 
                    createdAt: note.createdAt, 
                    lastEdited: note.lastEdited
                }
            })   
        default:
            return state
    }
}

export default notesReducer