import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Nav.css";

function Nav() {
    const [loggedIn, setLoggedIn] = useState(false);

    const location = useLocation();

    useEffect(() => {
        const token = window.localStorage.getItem("token");
        token != null ? setLoggedIn(true) : setLoggedIn(false);
    }, [location]);

    const logout = () => {
        localStorage.clear();
        window.location.reload();
        return;
    };

    return (
        <>
            <nav>
                <Link id="logo-link" to="/">
                    {/* <h1>Petreon</h1> */}
                    <img
                        className="logo"
                        src={window.location.origin + "/logo1.png"}
                    />
                </Link>
                <div className="nav-links">
                    {loggedIn ? (
                        <Link to="/dashboard">Dashboard</Link>
                    ) : (
                        <Link to="/">Home</Link>
                    )}
                    {!loggedIn && <Link to="/login">Login</Link>}
                    {loggedIn && (
                        <button className="nav-link" href="#" onClick={logout}>
                            Logout
                        </button>
                    )}
                    {loggedIn ? (
                        <Link
                            className="btn btn-secondary"
                            to={`/profile/${localStorage.username}`}
                        >
                            {localStorage.username}
                        </Link>
                    ) : (
                        <Link to="/register" className="btn btn-primary">
                            Create account
                        </Link>
                    )}
                </div>
            </nav>
            <div className="separation-container"></div>
        </>
    );
}

export default Nav;
