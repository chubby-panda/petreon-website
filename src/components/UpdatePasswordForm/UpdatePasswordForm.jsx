import React, { useState } from "react";
import "./UpdatePasswordForm.css";

const UpdatePasswordForm = ({ username }) => {
    const [message, setMessage] = useState("");
    const [credentials, setCredentials] = useState({});

    const handleChange = (e) => {
        e.preventDefault();
        const { id, value } = e.target;

        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [id]: value,
        }));
    };

    const postData = async () => {
        const token = window.localStorage.getItem("token");
        const username = window.localStorage.getItem("username");
        const response = await fetch(
            `${process.env.REACT_APP_API_URL}/users/account/${username}/change-password/`,
            {
                method: "PUT",
                headers: {
                    "Authorization": `Token ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(credentials),
            }
        );
        return response.json();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submit pressed...");
        if (credentials.old_password && credentials.new_password) {
            console.log("All data is there...");
            postData().then((response) => {
                console.log(response);
                setMessage("Success! Your password has been updated.");
            });
        } else {
            console.log("Not all data there");
        }
    };

    return (
        <form id="password-update-form">
            <h3>Change your password:</h3>
            {message ? <p className="text-primary">{message}</p> : null}
            <div className="form-input-box">
                <label htmlFor="old_password">Old password:</label>
                <input
                    id="old_password"
                    type="password"
                    onChange={handleChange}
                />
            </div>
            <div className="form-input-box">
                <label htmlFor="new_password">New password:</label>
                <input
                    id="new_password"
                    type="password"
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
    );
};

export default UpdatePasswordForm;
