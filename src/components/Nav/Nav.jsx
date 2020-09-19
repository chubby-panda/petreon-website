import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

function Nav() {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/pet'>Pet</Link>
        </nav>
    )
}

export default Nav