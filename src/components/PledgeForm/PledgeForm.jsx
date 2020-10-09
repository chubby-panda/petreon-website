import React, { useState } from "react";
// import { useHistory } from "react-router-dom";

const PledgeForm = ({ petId }) => {
    const [credentials, setCredentials] = useState({
        pet: petId,
        amount: 0,
        anonymous: false,
    });

    // const history = useHistory();
    const token = window.localStorage.getItem("token");

    const handleChange = (e) => {
        const { id, value } = e.target;

        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [id]: value,
        }));
    };

    const postData = async () => {
        const response = await fetch(
            `${process.env.REACT_APP_API_URL}/pets/${petId}/pledges/`,
            {
                method: "post",
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
        if (credentials.amount) {
            console.log("All data is there...");
            postData().then((response) => {
                console.log(response);
                // history.push("/");
                // window.location.reload();
            });
        } else {
            console.log("Not all data there");
        }
    };

    return (
        <div className="container">
            <h1>Make a pledge</h1>
            <form id="post-image-form">
                <div className="my-1 form-input-box">
                    <label htmlFor="amount">Amount:</label>
                    <input type="number" id="amount" onChange={handleChange} />
                </div>

                <button
                    className="btn btn-primary my-2"
                    type="submit"
                    onClick={handleSubmit}
                >
                    Upload
                </button>
            </form>
        </div>
    );
};

export default PledgeForm;
