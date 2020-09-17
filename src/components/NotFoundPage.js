import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import '../styles/add.css'

const NotFoundPage = () => {
    return <div className="container">
        <div className="popup-button-home">
            <Link to='/'>
                <div className="popup-button">
                    <FontAwesomeIcon icon={faHome} size='2x' className="home" /><span className="pop-up note-popup">Home</span>
                </div>
            </Link>
        </div> 
        <p className="do-not-exist">This page doesn't exist</p>
    </div>
}

export default NotFoundPage