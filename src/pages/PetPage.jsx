import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PetDetailCard from "../components/PetDetailCard/PetDetailCard";
import PostImageForm from "../components/PostImageForm/PostImageForm";

function PetPage(props) {
    const [loading, setLoading] = useState(true);
    const [petData, setPetData] = useState([]);
    const [pledges, setPledges] = useState([]);
    let { petId } = useParams();

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
        const petsIdUrl = `/pets/${petId}`;
        fetchURL(petsIdUrl, setPetData);
        fetchURL(`${petsIdUrl}/pledges`, setPledges);
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
                <div id="pet-detail" className="container">
                    <PetDetailCard petData={petData} pledges={pledges} />
                </div>
                <PostImageForm petId={petId} />
            </>
        );
    }
}

export default PetPage;
