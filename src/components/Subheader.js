import React, { useState, useEffect} from 'react'
import { saveSortBy } from '../actionTypes/functions'
import { useSelector, useDispatch } from 'react-redux'
import { changeSelect } from '../actionTypes/actions'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faSearch} from '@fortawesome/free-solid-svg-icons'
import '../styles/subheader.css'
import { FaSearch } from 'react-icons/fa';

const Subheader = (props) => {
    const notes = useSelector(state => state.notes)
    const sortBy = useSelector(state => state.sortBy)
    const dispatch = useDispatch()     
    const [showDetails, setShowDetails] = useState(true)

    const whenInputChange = (e) => {
        props.handleFilterBy(e.target.value)
        if(e.target.value){
            setShowDetails(false)
        }else{
            setShowDetails(true)
        }
    }

    useEffect(()=> {
        saveSortBy(sortBy)
    },[sortBy])

    const whenOptionChange = (e) => {
        dispatch(changeSelect(e.target.value))
    }

    let note_s 
    notes.length === 1 ? note_s='note' : note_s='notes'

    return <div className="subheader">
        {showDetails && <div className="subheader__title">
            <h2>All notes</h2>
            <p>{notes.length} {note_s}</p>
        </div>}
        
        {notes.length>0 && <div className="subheader__body">
            <div> 
                <input
                    type="text" 
                    placeholder="search notes"
                    onChange={whenInputChange }
                />
                <FaSearch 
                    className="search-icon"
                />
            </div>    
            {notes.length>1 && 
                (<select onChange={whenOptionChange} value={sortBy}>
                    <option value="byEdited">Sort by last edited</option>
                    <option value="byCreated">Sort by recently created</option>
                    <option value="byTitle">Sort by title</option>
                </select> || 
                <span className="custom-arrow"></span>)}
        </div>}
    </div>
}

export default Subheader