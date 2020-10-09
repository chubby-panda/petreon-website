import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

const UpdatePetImageForm = ({ image }) => {
    const [petImage, setPetImage] = useState();

    const history = useHistory();
    const { petId, imageId } = useParams();

    const handleChange = (e) => {
        setPetImage(e.target.files[0]);
    };

    console.log(petImage);

    const postData = async () => {
        const token = window.localStorage.getItem("token");
        // const username = window.localStorage.getItem("username");
        const options = {
            method: "PUT",
            headers: {
                "Authorization": `Token ${token}`,
                "Content-Disposition": `attachment; filename="${petImage.name}"`,
            },
            credentials: "omit",
            body: petImage,
        };
        const url = `${process.env.REACT_APP_API_URL}/pets/${petId}/images/${imageId}/`;
        const response = await fetch(url, options);
        debugger;

        return response.json();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submit pressed...");
        if (petImage != null) {
            console.log("All data is there...");
            console.log(petImage);
            debugger;
            postData().then((response) => {
                console.log(response);
                window.location.reload();
            });
        } else {
            console.log("Not all data there");
        }
    };

    return (
        <>
            <form id="update-profile-image-form">
                <div className="my-1 form-input-box">
                    <label htmlFor="image">Image:</label>
                    <input
                        type="file"
                        id="image"
                        onChange={handleChange}
                        accept="image/*"
                    />
                </div>
                <button
                    className="btn btn-primary my-2"
                    type="submit"
                    onClick={handleSubmit}
                >
                    Replace image
                </button>
            </form>
        </>
    );
};

export default UpdatePetImageForm;
