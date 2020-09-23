import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

function Nav() {
    return (
        <nav>
            <Link to='/'><h1>Petreon</h1></Link>
            <div className="nav-links">
                <Link to='/'>Home</Link>
                <Link to='/category'>Category</Link>
                <button className="btn btn-secondary">Login</button>
                <button className="btn btn-primary">Create account</button>
            </div>
        </nav>
    )
}

export default Nav