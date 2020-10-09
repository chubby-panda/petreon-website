import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./PostPetForm.css";

const PostPetForm = () => {
    const [credentials, setCredentials] = useState({
        title: "",
        pet_name: "",
        description: "",
        med_treatment: "",
        goal: "",
        pet_category: "",
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
        const response = await fetch(`${process.env.REACT_APP_API_URL}/pets/`, {
            method: "POST",
            headers: {
                "Authorization": `Token ${token}`,
            },
            body: formData,
        });
        return response.json();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submit pressed...");
        if (
            credentials.title &&
            credentials.pet_name &&
            credentials.description &&
            credentials.med_treatment &&
            credentials.goal
            // credentials.pet_category
        ) {
            console.log("All data is there...");
            postData().then((response) => {
                console.log(response.id);
                history.push(`/pet/${response.id}/images`);
            });
        } else {
            console.log("Not all data there");
        }
    };

    return (
        <>
            <form id="post-pet-form">
                <div className="my-1 form-input-box">
                    <label htmlFor="title">Fundraiser Title</label>
                    <input type="text" id="title" onChange={handleChange} />
                </div>
                <div className="my-1 form-input-box">
                    <label htmlFor="pet_name">Name of Pet</label>
                    <input type="text" id="pet_name" onChange={handleChange} />
                </div>
                <div className="my-1 form-input-box">
                    <label htmlFor="description">Description</label>
                    <textarea
                        type="text"
                        id="description"
                        onChange={handleChange}
                    />
                </div>
                <div className="my-1 form-input-box">
                    <label htmlFor="med_treatment">Medical Treatment</label>
                    <input
                        type="text"
                        id="med_treatment"
                        onChange={handleChange}
                    />
                </div>
                <div className="my-1 form-input-box">
                    <label htmlFor="goal">Target (in dollars)</label>
                    <input
                        type="number"
                        id="goal"
                        min="1"
                        max="100000"
                        onChange={handleChange}
                    />
                </div>
                <div className="my-1 form-input-box">
                    <label htmlFor="pet_category">Species</label>
                    <input
                        type="text"
                        id="pet_category"
                        onChange={handleChange}
                    />
                </div>
                {/* <div className="pet-icons">
                    <label>Species</label>
                    <div className="pet-icons-choices">
                        <button title="dog" onClick={handlePetChoice}>
                            <i class="fas fa-dog fa-2x"></i>
                        </button>
                        <button title="cat" onClick={handlePetChoice}>
                            <i class="fas fa-cat fa-2x"></i>
                        </button>
                        <button title="bird" onClick={handlePetChoice}>
                            <i class="fas fa-kiwi-bird fa-2x"></i>
                        </button>
                        <button title="rabbit" onClick={handlePetChoice}>
                            <i class="fas fa-carrot fa-2x"></i>
                        </button>
                        <button title="other" onClick={handlePetChoice}>
                            <i class="fas fa-question fa-2x"></i>
                        </button>
                    </div>
                </div> */}
                <button
                    className="btn btn-primary my-2"
                    type="submit"
                    onClick={handleSubmit}
                >
                    Next step
                </button>
            </form>
        </>
    );
};

export default PostPetForm;
