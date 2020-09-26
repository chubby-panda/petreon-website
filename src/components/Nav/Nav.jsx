import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

function Nav() {

    const logout = () => {
        window.localStorage.clear()
        return
    }

    return (
        <>
            <nav>
                <Link to='/'><h1>Petreon</h1></Link>
                <div className="nav-links">
                    <Link to='/'>Home</Link>
                    {!window.localStorage.token && <Link to='/login'>Login</Link>}
                    {window.localStorage.token && <Link to='/logout' onClick={logout}>Logout</Link>}
                    <Link to='/register' className="btn btn-primary">Create account</Link>
                </div>
            </nav>
            <div className="separation-container"></div>
        </>
    )
}

export default Nav