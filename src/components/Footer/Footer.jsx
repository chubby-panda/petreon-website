import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Footer.css";

function Footer() {
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
            <div className="separation-container"></div>
            <footer>
                <div className="footer-content container py-4">
                    <Link to="/privacy-policy">Privacy Policy</Link>
                    <div className="social-icons">
                        <a href="#">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="#">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
