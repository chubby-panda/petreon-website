import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PetDetailCard from "../components/PetDetailCard/PetDetailCard";
import PostImageForm from "../components/PostImageForm/PostImageForm";

function PetPage(props) {
    const [loggedIn, setLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);
    const [petData, setPetData] = useState([]);
    const [images, setImages] = useState([]);
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
        const token = window.localStorage.getItem("token");
        token != null ? setLoggedIn(true) : setLoggedIn(false);
        const petsIdUrl = `/pets/${petId}`;
        fetchURL(petsIdUrl, setPetData);
        fetchURL(`${petsIdUrl}/images`, setImages);
        setLoading(false);
    }, []);

    // console.log(images);

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
                    <PetDetailCard
                        petData={petData}
                        pledges={pledges}
                        images={images}
                    />
                </div>
                {loggedIn ? <PostImageForm petId={petId} /> : null}
            </>
        );
    }
}

export default PetPage;
