import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import DeletePetForm from "../components/DeletePetForm/DeletePetForm";
import PetDetailCard from "../components/PetDetailCard/PetDetailCard";
import PostImageForm from "../components/PostImageForm/PostImageForm";
import UpdatePetForm from "../components/UpdatePetForm/UpdatePetForm";
import Sidebar from "../components/Sidebar/Sidebar";
import Loading from "../components/Loading/Loading";

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

    let content;
    if (editPage === true) {
        content = (
            <>
                <UpdatePetForm petData={petData} />
                <PostImageForm petId={petId} />
                <DeletePetForm petId={petId} />
                {images.length > 0 ? (
                    <>
                        <h4>Your images:</h4>
                        <p>Click on an image to edit or delete it.</p>
                        <div id="your-images">
                            {images.map((img, key) => {
                                return (
                                    <Link
                                        to={{
                                            pathname: `/pet/${petId}/images/${img.id}`,
                                        }}
                                    >
                                        <img
                                            key={key}
                                            src={img.image}
                                            alt="image"
                                            onClick={() => console.log(img.id)}
                                        />
                                    </Link>
                                );
                            })}
                        </div>
                    </>
                ) : null}
            </>
        );
    } else {
        content = (
            <PetDetailCard
                petData={petData}
                pledges={pledges}
                images={images}
                petId={petId}
            />
        );
    }

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
        fetchURL(`${petsIdUrl}/images/`, setImages);
        fetchURL(`${petsIdUrl}/pledges/`, setPledges);
        setLoading(false);
    }, []);

    // console.log(images);

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
                    ) : null}
                    {content}
                </div>
            </div>
        );
    }
}

export default PetPage;
