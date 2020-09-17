import React, { useEffect} from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { removeNote } from '../actionTypes/actions'
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit} from '@fortawesome/free-solid-svg-icons'
import '../styles/note.css'

const Note = (props) => {    
    const dispatch = useDispatch()

    useEffect(() => {
        if ((!props.title) && (!props.body)) {
            dispatch(removeNote(props.id))
        }
    },[])
    
    const whenRemoveNote = () => {
        dispatch(removeNote(props.id))
    }

    return <div className="note">
        <div className="note-details">
            <div>
                <h3 className="note-title">{props.title}</h3>
                <p className="note-body">{props.body}</p>
            </div>
            <div className="time-details">    
                <span>last edited {moment(Number(props.timestamp)).fromNow()}</span>
                <span>created {moment(Number(props.createdAt)).fromNow()}</span>
            </div>
        </div>
        <div className="note-buttons">
            <Link to={`/edit/${props.id}/${props.timestamp}`}>
                <button className="popup-button"><FontAwesomeIcon icon={faEdit} size='2x' /><span className="pop-up note-popup">edit</span></button>
            </Link>
            <button 
                onClick={whenRemoveNote}
                className="popup-button"
            ><FontAwesomeIcon icon={faTrashAlt} size='2x' /><span className="pop-up note-popup">delete</span>
            </button>
        </div>
    </div>
}

export default Note