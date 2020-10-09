import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PetDetailCard from "../components/PetDetailCard/PetDetailCard";
import PostImageForm from "../components/PostImageForm/PostImageForm";
import UpdatePetForm from "../components/UpdatePetForm/UpdatePetForm";

function PetPage(props) {
    const [loggedIn, setLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);
    const [petData, setPetData] = useState([]);
    const [pledges, setPledges] = useState([]);
    const [images, setImages] = useState([]);
    let { petId } = useParams();
    const username = window.localStorage.getItem("username");
    const [editPage, setEditPage] = useState(false);

    const handleEditClick = (e) => {
        if (editPage === false) {
            setEditPage(true);
            e.target.innerText = "Back";
        } else {
            setEditPage(false);
            e.target.innerText = "Edit";
        }
    };

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
        fetchURL(`${petsIdUrl}/pledges`, setPledges);
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
            <div className="container">
                <div id="pet-detail">
                    {petData.owner === username ? (
                        <>
                            <button
                                className="btn btn-primary my-1"
                                onClick={handleEditClick}
                            >
                                Edit
                            </button>
                        </>
                    ) : (
                        <PetDetailCard
                            petData={petData}
                            pledges={pledges}
                            images={images}
                            petId={petId}
                        />
                    )}
                    {editPage === true ? (
                        <>
                            <UpdatePetForm petData={petData} />
                            <PostImageForm petId={petId} />
                        </>
                    ) : (
                        <PetDetailCard
                            petData={petData}
                            pledges={pledges}
                            images={images}
                            petId={petId}
                        />
                    )}
                </div>
            </div>
        );
    }
}

export default PetPage;
