export const addNote = (noteDetails) => ({
    type: 'ADD_NOTE', payload: noteDetails
})

export const removeNote = (id) => ({ 
    type: 'REMOVE_NOTE', payload: id 
})
  
export const editNote = (noteDetails) => ({ 
    type: 'EDIT_NOTE', payload: noteDetails
})

export const changeSelect = (sortBy) => ({
    type: 'CHANGE_SORT_BY', payload: sortBy
})