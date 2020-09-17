import React from 'react'
import Note from './Note'
import { sortNotes } from '../actionTypes/functions'
import { useSelector } from 'react-redux'

const Notes = (props) => {
    const notes = useSelector(state => state.notes)
    const sortBy = useSelector(state => state.sortBy)
    return <div className="notes">
        {
            sortNotes(notes, sortBy).map(note => {
                if (note.title.includes(props.filterBy) || note.body.includes(props.filterBy)) {
                    return <div key={note.id}>
                        <Note
                            title={note.title}
                            body={note.body}
                            id={note.id}
                            timestamp={note.lastEdited}
                            createdAt={note.createdAt}
                        />
                    </div>
                }
            })
        }    
    </div>
}

export default Notes