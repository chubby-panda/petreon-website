import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./UpdateProfileForm.css";

const UpdateProfileForm = ({ profileData }) => {
    const [credentials, setCredentials] = useState();

    useEffect(() => {
        setCredentials({
            fun_fact: profileData.fun_fact,
        });
    }, [profileData]);

    const handleChange = (e) => {
        e.preventDefault();
        const { id, value } = e.target;

        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [id]: value,
        }));
    };
    // console.log(credentials);

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
        // console.log("Submit pressed...");
        if (credentials.fun_fact) {
            // console.log("All data is there...");
            postData().then((response) => {
                console.log(response);
                // window.location.reload();
            });
        } else {
            // console.log("Not all data there");
        }
    };

    return (
        <>
            <form id="update-profile-form">
                <h3>Update your profile:</h3>
                <div className="my-1 form-input-box">
                    <label htmlFor="fun_fact">Fun Fact:</label>
                    <textarea
                        defaultValue={profileData.fun_fact}
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
                    Save
                </button>
            </form>
        </>
    );
};

export default UpdateProfileForm;
