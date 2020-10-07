import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PetCard from "../PetCard/PetCard";
import "./Dashboard.css";

const Dashboard = ({ petList }) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const username = window.localStorage.getItem("username");

    useEffect(() => {
        const token = window.localStorage.getItem("token");
        token != null ? setLoggedIn(true) : setLoggedIn(false);
    }, []);

    return (
        <>
            <aside id="dashboard-sidebar">
                <div className="sidebar-menu">
                    <Link className="dark-background" to="/pet-create">
                        New Project
                    </Link>
                    <Link to={`/profile/${username}/pets`}>My Pets</Link>
                    <Link to="/notifications">Notifications</Link>
                    <Link to="/">Messages</Link>
                    <Link to={`/profile/${username}`}>Profile</Link>
                    <Link to="/">Account Settings</Link>
                </div>
            </aside>
            {/* <div className="upper-menu">
                <Link to="/pet-create">New Project</Link>
            </div> */}
            <div className="content-container">
                <h1 className="text-primary centered larger-heading">
                    Latest Pets
                </h1>
                <div id="pet-list">
                    {petList.map((projectData, key) => {
                        return <PetCard key={key} projectData={projectData} />;
                    })}
                </div>
            </div>
        </>
    );
};

export default Dashboard;
