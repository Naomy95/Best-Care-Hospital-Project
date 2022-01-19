import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div>
            <img style={{width: '100%'}} src='https://i.ibb.co/7KWstF7/traffic-sign-page-404-found-flat-illustration-80328-232.jpg'></img>
            <Link to='/'>
                <button className='btn-add'>Go Back</button>
            </Link>
        </div>
    )
}

export default NotFound
