import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addNote } from '../actionTypes/actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import '../styles/add.css'

const AddForm = () => {
    const [showSave, setShowSave] = useState(true)
    const dispatch = useDispatch()

    const whenAddNote = (e) => {
        e.preventDefault()
        const noteDetails = { title: undefined, body: undefined }
        noteDetails.title = e.target.note_title.value.trim('')
        noteDetails.body = e.target.note_body.value.trim('')
        
        if (noteDetails.title.length > 0 || noteDetails.body.length > 0) {
            dispatch(addNote(noteDetails))
        }

        e.target.note_title.value = ''
        e.target.note_body.value = ''
        
        setShowSave(false)
    }

    return <div className="container">
        <div className="popup-button-home">
            <Link to='/'>
                <div className="popup-button">
                    <FontAwesomeIcon icon={faHome} size='2x' className="home" /><span className="pop-up note-popup">Home</span>
                </div>
            </Link>
        </div>
        <form onSubmit={whenAddNote} className="note-form">
            <div className="note-details-form">
                <textarea
                    autoComplete="off"
                    rows="1"
                    className="note-title-form note-input" 
                    id="note_title"
                    placeholder="Title" 
                    onClick={()=>setShowSave(true)}
                ></textarea>
                <textarea 
                    autoComplete="off"
                    rows="5"
                    className="note-body-form note-input"
                    id="note_body"
                    placeholder="Body"
                    onClick={()=>setShowSave(true)}
                ></textarea>
            </div>
            { 
                showSave ? <button type="submit" className="save-button">Save</button> : null
            }
        </form>
    </div>
}

export default AddForm