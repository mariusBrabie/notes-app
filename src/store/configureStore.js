import { createStore, combineReducers } from 'redux'
import notesReducer from '../reducers/notesReducer' 
import selectReducer from '../reducers/selectReducer'

export default () => {
    return createStore(combineReducers({
        notes: notesReducer,
        sortBy: selectReducer
    }))
}