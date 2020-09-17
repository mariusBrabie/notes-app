import React, {useState, useEffect} from 'react'
import Notes from './Notes'
import { NavLink } from 'react-router-dom'
import Subheader from './Subheader'
import { saveNotes } from '../actionTypes/functions'
import { useSelector } from 'react-redux'

const Container = () => {
    
    const [filterBy, setFilterBy] = useState('')
    const notes = useSelector(state => state.notes)

    useEffect(() => {
        saveNotes(notes)
    },[notes])

    const handleFilterBy = (searchText) => {
        setFilterBy(searchText)
    }

    return <div className="container both-parts">
        <div className="first-part">
            <Subheader
                handleFilterBy={handleFilterBy}
            />
            
            <Notes
                filterBy={filterBy}
            />
        </div>
        <div className="second-part">
            { notes.length === 0 && <h3 className="no-notes-message"><center>Click the Add button to create notes</center></h3> }
            {!filterBy && <div><NavLink to="add/">
                <button className="add-button popup-button">+<span className="pop-up">Add</span></button>
            </NavLink></div>}    
        </div>
    </div>    
}

export default Container