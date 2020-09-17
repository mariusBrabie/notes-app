import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { whenEdited } from '../actionTypes/functions'
import { useSelector, useDispatch } from 'react-redux'
import { editNote } from '../actionTypes/actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import '../styles/add.css'

const EditForm = (props) => {
    const dispatch = useDispatch()
    const notes = useSelector(state => state.notes)

    const myNote = notes.find(note => {
        return note.id.toString() === props.match.params.id.toString()
    })

    const [noteTitle, setTitle] = useState(myNote.title)
    const [noteBody, setBody] = useState(myNote.body)

    const whenTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const whenBodyChange = (e) => {
        setBody(e.target.value)
    }

    const whenEditSubmit = (e) => {
        e.preventDefault()
        dispatch(editNote({title: noteTitle, body: noteBody, id: Number(props.match.params.id), lastEdited: whenEdited() }))
    }
    //#f38330
    return <div className="container">
        <div className="popup-button-home">
            <Link to='/'>
                <div className="popup-button">
                    <FontAwesomeIcon icon={faHome} size='2x' className="home" /><span className="pop-up note-popup">Home</span>
                </div>
            </Link>
        </div> 
        <form className="note-form">
            <div className="note-details-form">
                <textarea
                    autoComplete="off"
                    rows="1"
                    className="note-title-form note-input" 
                    onChange={whenTitleChange} 
                    id="edit_title" 
                    placeholder="Title" 
                    defaultValue={noteTitle} 
                ></textarea>
                <textarea
                    autoComplete="off"
                    rows="5"
                    className="note-body-form note-input" 
                    onChange={whenBodyChange} 
                    id="edit_body" 
                    placeholder="Body" 
                    defaultValue={noteBody}
                ></textarea> 
            </div>
            <button 
                onClick={whenEditSubmit} 
                type="button"  
                className="save-button"
            ><Link to="/" className="save-button-text"><span>Save</span></Link>
            </button>
        </form>    
    </div>
}

export default EditForm