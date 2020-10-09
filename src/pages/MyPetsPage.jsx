import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PetCard from "../components/PetCard/PetCard";
import Sidebar from "../components/Sidebar/Sidebar";
import Loading from "../components/Loading/Loading";

function MyPetsPage(props) {
    const [loading, setLoading] = useState(true);
    const [pets, setPets] = useState([]);
    let { username } = useParams();

    const fetchURL = (url, setterFunction) => {
        fetch(`${process.env.REACT_APP_API_URL}${url}`)
            .then((results) => {
                return results.json();
            })
            .then((data) => {
                setterFunction(data);
            });
    };

    useEffect(() => {
        fetchURL(`/users/${username}/pets`, setPets);
        setLoading(false);
    }, []);

    if (loading) {
        return (
            <>
                <Sidebar />
                <div className="content-container">
                    <Loading />
                </div>
            </>
        );
    } else {
        return (
            <>
                <Sidebar />
                <div id="my-pets-page" className="content-container">
                    {pets.map((projectData, key) => {
                        return <PetCard key={key} projectData={projectData} />;
                    })}
                </div>
            </>
        );
    }
}

export default MyPetsPage;
