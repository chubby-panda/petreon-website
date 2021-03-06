import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./PostImageForm.css";

const PostImageForm = ({ petId }) => {
    const [imageFile, setImageFile] = useState(null);

    const history = useHistory();

    const handleChange = (e) => {
        setImageFile(e.target.files[0]);
    };

    console.log(imageFile);

    const postData = async () => {
        const token = window.localStorage.getItem("token");
        const options = {
            method: "POST",
            headers: {
                "Authorization": `Token ${token}`,
                "Content-Disposition": `attachment; filename="${imageFile.name}"`,
            },
            credentials: "omit",
            body: imageFile,
        };
        const url = `${process.env.REACT_APP_API_URL}/pets/${petId}/images/`;
        const response = await fetch(url, options);

        return response.json();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submit pressed...");
        if (imageFile != null) {
            console.log("All data is there...");
            postData().then((response) => {
                console.log(response);
                window.location.reload();
            });
        } else {
            console.log("Not all data there");
        }
    };

    return (
        <div className="container">
            <form id="post-image-form">
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
                    className="btn btn-primary"
                    type="submit"
                    onClick={handleSubmit}
                >
                    Upload
                </button>
            </form>
        </div>
    );
};

export default PostImageForm;
