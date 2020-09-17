import { getSortBy } from '../actionTypes/functions'

const selectReducer = (state=getSortBy(), action) => {
    switch(action.type){
        case 'CHANGE_SORT_BY':
            return action.payload
        default:
            return state
    }
}

export default selectReducer