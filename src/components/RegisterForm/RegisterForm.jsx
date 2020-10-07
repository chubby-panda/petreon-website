import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import "./Register.css";

const RegisterForm = () => {
    const [credentials, setCredentials] = useState({
        username: "",
        email: "",
        password: "",
        password2: "",
    });

    const [errors, setErrors] = useState([]);

    const history = useHistory();

    const handleChange = (e) => {
        const { id, value } = e.target;
        // console.log(e.target)
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [id]: value,
        }));
    };

    const postData = async () => {
        const response = await fetch(
            `${process.env.REACT_APP_API_URL}/users/register/`,
            {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(credentials),
            }
        );
        return response.json();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (credentials.password !== credentials.password2) {
            setErrors(["The passwords do not match"]);
        } else {
            if (
                credentials.username &&
                credentials.email &&
                credentials.password &&
                credentials.password2
            ) {
                postData().then((response) => {
                    if (
                        response.username !== undefined &&
                        response.username[0] ===
                            "A user with that username already exists."
                    ) {
                        console.log(response);
                        setErrors(response.username[0]);
                    } else {
                        if (
                            response.email !== undefined &&
                            response.email[0] === "Enter a valid email address."
                        ) {
                            setErrors(response.email[0]);
                        } else {
                            history.push("/login");
                        }
                    }
                });
            } else {
                setErrors(["Please fill out all fields."]);
            }
        }
    };

    return (
        <form id="register-form">
            {errors.length > 0 ? <ErrorMessage errors={errors} /> : null}
            <div className="my-1 form-input-box">
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    onChange={handleChange}
                    placeholder="Enter a username..."
                />
            </div>
            <div className="my-1 form-input-box">
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    onChange={handleChange}
                    placeholder="Enter a valid email..."
                />
            </div>
            <div className="my-1 form-input-box">
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    onChange={handleChange}
                    placeholder="Enter a password..."
                />
            </div>
            <div className="my-1 form-input-box">
                <label htmlFor="password2">Confirm password:</label>
                <input
                    type="password"
                    id="password2"
                    onChange={handleChange}
                    placeholder="Confirm password..."
                />
            </div>
            <button
                className="btn btn-primary my-2"
                type="submit"
                onClick={handleSubmit}
            >
                Register
            </button>
        </form>
    );
};

export default RegisterForm;
