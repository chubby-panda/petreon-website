import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import PetCard from "../components/PetCard/PetCard";
import HomeAbout from "../components/HomeAbout/HomeAbout";
import Dashboard from "../components/Dashboard/Dashboard";
// import { AllPets } from '../data'

function HomePage() {
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

    // if (isLogin()) {
    //     console.log(localStorage.username)
    // } else {
    //     console.log("Not logged in.")
    // }

    return (
        <>
            {loggedIn ? (
                <>
                    <Dashboard petList={petList} />
                </>
            ) : (
                <>
                    <div id="showcase">
                        <h1 className="text-secondary">
                            Save a pet, change a life
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Vitae consequuntur.
                        </p>
                        <Link to="/register" className="btn btn-primary my-2">
                            Get started
                        </Link>
                    </div>
                    <div className="separation-container"></div>
                    <HomeAbout />
                    <h1 className="text-primary centered larger-heading">
                        Latest Pets
                    </h1>
                    <div className="grey-background" id="pet-list">
                        {petList.map((projectData, key) => {
                            return (
                                <PetCard key={key} projectData={projectData} />
                            );
                        })}
                    </div>
                </>
            )}
        </>
    );
}

export default HomePage;
