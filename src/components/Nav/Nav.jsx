import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'


function Nav() {

    const logout = () => {
        localStorage.clear()
        window.location.reload()
        return
    }

    return (
        <>
            <nav>
                <Link to='/'><h1>Petreon</h1></Link>
                <div className="nav-links"> 
                    <Link to='/'>Home</Link>
                    {!localStorage.token && <Link to='/login'>Login</Link>}
                    {localStorage.token && <button className="nav-link" href="#" onClick={logout}>Logout</button>}
                    <Link to='/register' className="btn btn-primary">Create account</Link>
                </div>
            </nav>
            <div className="separation-container"></div>
        </>
    )
}

export default Nav