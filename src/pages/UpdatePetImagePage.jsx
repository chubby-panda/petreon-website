import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DeletePetImageForm from "../components/DeletePetImageForm/DeletePetImageForm";
import UpdatePetImageForm from "../components/UpdatePetImageForm/UpdatePetImageForm";

const UpdatePetImagePage = () => {
    const { petId, imageId } = useParams();
    const [image, setImage] = useState();
    const [loggedIn, setLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    console.log(petId);

    useEffect(() => {
        fetch(
            `${process.env.REACT_APP_API_URL}/pets/${petId}/images/${imageId}/`
        )
            .then((results) => {
                return results.json();
            })
            .then((data) => {
                setImage(data);
            });
        setLoading(false);
    }, []);

    return (
        <div className="container">
            {image != null ? (
                <>
                    <h1>This is the image</h1>
                    <img className="small-image" src={image.image} alt="" />
                    <DeletePetImageForm petId={petId} imageId={imageId} />
                    <UpdatePetImageForm
                        image={image}
                        petId={petId}
                        imageId={imageId}
                    />
                </>
            ) : null}
        </div>
    );
};

export default UpdatePetImagePage;
