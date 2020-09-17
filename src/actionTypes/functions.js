import moment from 'moment'

const getID = () => {
    return Math.floor(Math.random() * 9999999999)
}

const whenCreated = () => {
    return moment().unix()*1000
}

const whenEdited = () => {
    return moment().unix()*1000
}

const sortNotes = (notes, sortBy) => {
    return [].concat(notes).sort((a, b) => {
        if (sortBy === 'byEdited') {
            if (a.lastEdited > b.lastEdited) {
                return -1
            }else{
                return 1
            }
        } else if (sortBy === 'byCreated') {
            if (a.createdAt > b.createdAt) {
                return -1
            }else{
                return 1
            }
        } else if (sortBy === 'byTitle') {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1
            }else{
                return 1
            }
        }
    })
}

const getNotes = () =>{
    const notesJSON = localStorage.getItem('savedNotes')   
    try {
        return notesJSON ? JSON.parse(notesJSON) : []
    }catch (e){
        return []
    }
}

const saveNotes = (notes) => {
    localStorage.setItem('savedNotes', JSON.stringify(notes))
}

const getSortBy = () => {
    const sortByJSON = localStorage.getItem('savedSortBy')
    try {
        return sortByJSON ? JSON.parse(sortByJSON) : 'byEdited'
    }catch(e){
        return 'byEdited'
    }
}

const saveSortBy = (sortBy) => {
    localStorage.setItem('savedSortBy', JSON.stringify(sortBy))
}

export { getID, whenCreated, whenEdited, sortNotes, getNotes, saveNotes, getSortBy, saveSortBy }