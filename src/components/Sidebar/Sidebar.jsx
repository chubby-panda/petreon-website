import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const username = window.localStorage.getItem("username");
    const [profileData, setProfileData] = useState([]);

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

    // const toggleMenu = (e) => {
    //     let menuItems = e.target.parentElement.parentElement.children;
    //     console.log(menuItems);
    //     menuItems.addClass("display");
    //     // console.log(e.target.parentElement.parentElement.children[1]);
    // };

    return (
        <>
            <aside id="dashboard-sidebar">
                <div className="sidebar-menu">
                    {/* <button id="dropdown-btn" onClick={toggleMenu}>
                        <i class="fas fa-bars fa-2x"></i>
                    </button> */}
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/pet-create">New Project</Link>
                    <Link to={`/profile/${username}/pets`}>My Pets</Link>
                    <Link to="/notifications">Notifications</Link>
                    <Link to="/messages">Messages</Link>
                    <Link to={`/profile/${username}`}>Profile</Link>
                    <Link to="/account-settings">Account Settings</Link>
                    <div className="profile-image-container">
                        <img
                            className="profile-image"
                            src={profileData.profile_img}
                            alt="image"
                        />
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
