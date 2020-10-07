import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PetCard from "../components/PetCard/PetCard";

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
                <h1>I am loading...</h1>
            </>
        );
    } else {
        return (
            <>
                <div id="my-pets-page" className="container">
                    {pets.map((projectData, key) => {
                        return <PetCard key={key} projectData={projectData} />;
                    })}
                </div>
            </>
        );
    }
}

export default MyPetsPage;
