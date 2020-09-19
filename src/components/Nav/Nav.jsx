import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

function Nav() {
    return (
        <nav>
            <h1>Petreon</h1>
            <div className="nav-links">
                <Link to='/'>Home</Link>
                <Link to='/pet'>Pet</Link>
            </div>
        </nav>
    )
}

export default Nav