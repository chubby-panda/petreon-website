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
                    <div id="footer-left">
                        <Link to="/privacy-policy">Privacy Policy</Link>
                        <br />
                        <Link to="/about">About Us</Link>
                        <br />
                        <br />
                        <p>Copyright &copy; Petreon 2020</p>
                    </div>
                    <div id="footer-right">
                        <img
                            className="small-image"
                            src={window.location.origin + "/logo2.png"}
                            alt="logo"
                        />
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
                </div>
            </footer>
        </>
    );
}

export default Footer;
