import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";

const PledgePage = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);
    const [pledge, setPledge] = useState([]);
    const [pet, setPet] = useState([]);
    let { petId, pledgeId } = useParams();

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
        const token = window.localStorage.getItem("token");
        token != null ? setLoggedIn(true) : setLoggedIn(false);
        fetchURL(`/pets/${petId}/`, setPet);
        fetchURL(`/pets/${petId}/pledges/${pledgeId}`, setPledge);
        setLoading(false);
    }, []);

    if (loading) {
        return (
            <>
                <h1>loading...</h1>
            </>
        );
    } else {
        return (
            <>
                <p>
                    <Link to={`/profile/${pledge.supporter}`}>
                        {pledge.supporter}
                    </Link>{" "}
                    pledged ${pledge.amount} to {pet.pet_name}.
                </p>
            </>
        );
    }
};

export default PledgePage;
