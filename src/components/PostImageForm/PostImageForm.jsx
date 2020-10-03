import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const PostImageForm = ({ petId }) => {
    const [imageFile, setImageFile] = useState(null);

    const history = useHistory();

    const handleChange = (e) => {
        setImageFile(e.target.files[0]);
    };

    const postData = async () => {
        const formData = new FormData();
        formData.append("image", imageFile);
        const token = window.localStorage.getItem("token");
        const options = {
            method: "POST",
            headers: {
                "Authorization": `Token ${token}`,
                "Content-Type": "multipart/form-data",
            },
            body: imageFile,
        };
        const url = `${process.env.REACT_APP_API_URL}/pets/${petId}/images/`;
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const response = await fetch(proxyurl + url, options);
        delete options.headers["Content-Type"];
        return response.json();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submit pressed...");
        if (imageFile != null) {
            console.log("All data is there...");
            postData().then((response) => {
                console.log(response);
                // history.push("/");
            });
        } else {
            console.log("Not all data there");
        }
    };

    return (
        <>
            <form>
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
                    Post
                </button>
            </form>
        </>
    );
};

export default PostImageForm;
