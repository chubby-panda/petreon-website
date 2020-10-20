import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./SidebarMobile.css";

const SidebarMobile = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const username = window.localStorage.getItem("username");
    const [profileData, setProfileData] = useState([]);

    const [menuVisible, setMenuVisible] = useState(false);

    useEffect(() => {
        const token = window.localStorage.getItem("token");
        token != null ? setLoggedIn(true) : setLoggedIn(false);
        fetch(`${process.env.REACT_APP_API_URL}/users/profile/${username}/`)
            .then((results) => {
                return results.json();
            })
            .then((data) => {
                setProfileData(data);
            });
    }, []);

    const toggleMenu = (e) => {
        setMenuVisible(!menuVisible);
    };

    console.log(menuVisible);

    return (
        <>
            <aside id="dashboard-sidebar-mobile">
                <div className="sidebar-menu-mobile">
                    <button id="dropdown-btn" onClick={toggleMenu}>
                        Menu{" "}
                        {menuVisible ? (
                            <i class="fas fa-minus"></i>
                        ) : (
                            <i class="fas fa-plus"></i>
                        )}
                    </button>
                    <div
                        id={`${
                            menuVisible
                                ? "mobile-menu-items-visible"
                                : "mobile-menu-items-hidden"
                        }`}
                    >
                        <Link className="mobile-menu-item" to="/dashboard">
                            Dashboard
                        </Link>
                        <Link className="mobile-menu-item" to="/pet-create">
                            New Project
                        </Link>
                        <Link
                            className="mobile-menu-item"
                            to={`/profile/${username}/pets`}
                        >
                            My Pets
                        </Link>
                        <Link className="mobile-menu-item" to="/notifications">
                            Notifications
                        </Link>
                        <Link className="mobile-menu-item" to="/messages">
                            Messages
                        </Link>
                        <Link
                            className="mobile-menu-item"
                            to={`/profile/${username}`}
                        >
                            Profile
                        </Link>
                        <Link
                            className="mobile-menu-item"
                            to="/account-settings"
                        >
                            Account Settings
                        </Link>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default SidebarMobile;
