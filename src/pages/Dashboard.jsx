import React, { useState, useEffect } from "react";
import PetCard from "../components/PetCard/PetCard";
import Sidebar from "../components/Sidebar/Sidebar";

function Dashboard() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [petList, setPetList] = useState([]);

    useEffect(() => {
        const token = window.localStorage.getItem("token");
        token != null ? setLoggedIn(true) : setLoggedIn(false);
        fetch(`${process.env.REACT_APP_API_URL}/pets/`)
            .then((results) => {
                return results.json();
            })
            .then((data) => {
                setPetList(data);
            });
    }, []);

    return (
        <>
            <Sidebar />
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
}

export default Dashboard;
