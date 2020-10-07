import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./UpdateProfileForm.css";

const UpdateProfileForm = () => {
    const defaultImage =
        "https://petreon-assets.s3.us-east-2.amazonaws.com/default.jpg";
    const [credentials, setCredentials] = useState({
        fun_fact: "",
    });
    const history = useHistory();

    const handleChange = (e) => {
        const { id, value } = e.target;

        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [id]: value,
        }));
    };

    const postData = async () => {
        const formData = new FormData();
        Object.keys(credentials).forEach((key) =>
            formData.append(key, credentials[key])
        );
        const token = window.localStorage.getItem("token");
        const username = window.localStorage.getItem("username");
        const response = await fetch(
            `${process.env.REACT_APP_API_URL}/users/profile/${username}`,
            {
                method: "PUT",
                headers: {
                    "Authorization": `Token ${token}`,
                },
                body: formData,
            }
        );
        return response.json();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submit pressed...");
        if (credentials.fun_fact) {
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
        <>
            <div className="separation-container"></div>
            <form id="update-profile-form">
                <h3>Update your profile:</h3>
                <div className="my-1 form-input-box">
                    <label htmlFor="fun_fact">Fun Fact:</label>
                    <textarea
                        type="text"
                        id="fun_fact"
                        onChange={handleChange}
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

export default UpdateProfileForm;
