import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const DeletePetImageForm = ({ petId, imageId }) => {
    const history = useHistory();

    const postData = async () => {
        const token = window.localStorage.getItem("token");
        const response = await fetch(
            `${process.env.REACT_APP_API_URL}/pets/${petId}/images/${imageId}/`,
            {
                method: "DELETE",
                headers: {
                    "Authorization": `Token ${token}`,
                },
            }
        );
        return response;
    };

    const handleSubmit = (e) => {
        console.log("Submit pressed...");
        postData().then((response) => {
            console.log(response.id);
            history.push(`/pet/${petId}/images`);
        });
    };

    return (
        <div id="delete-pet-image-form">
            <button
                className="btn btn-primary my-2"
                type="submit"
                onClick={handleSubmit}
            >
                Delete image
            </button>
        </div>
    );
};

export default DeletePetImageForm;
