import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import "./UpdatePetForm.css";

const UpdatePetForm = ({ petData }) => {
    const [credentials, setCredentials] = useState();
    let { petId } = useParams();
    const history = useHistory();

    useEffect(() => {
        setCredentials({
            title: petData.title,
            pet_name: petData.pet_name,
            description: petData.description,
            med_treatment: petData.med_treatment,
            goal: petData.goal,
            pet_category: petData.pet_category,
            active: petData.active,
        });
    }, [petData]);

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
        const response = await fetch(
            `${process.env.REACT_APP_API_URL}/pets/${petId}`,
            {
                method: "PUT",
                headers: {
                    "Authorization": `Token ${token}`,
                },
                body: formData,
            }
        );
        return response.json();
        console.log(response);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submit pressed...");
        if (
            credentials.title ||
            credentials.pet_name ||
            credentials.description ||
            credentials.med_treatment ||
            credentials.goal ||
            credentials.pet_category
        ) {
            console.log("All data is there...");
            postData().then((response) => {
                console.log(response);
                window.location.reload();
            });
        } else {
            console.log("Not all data there");
        }
    };

    // TEMPLATE
    return (
        <>
            <form id="update-pet-form" class="container">
                <div className="my-1 form-input-box">
                    <label htmlFor="title">Title:</label>
                    <input
                        defaultValue={petData.title}
                        type="text"
                        id="title"
                        onChange={handleChange}
                    />
                </div>
                <div className="my-1 form-input-box">
                    <label htmlFor="pet_name">Pet Name:</label>
                    <input
                        defaultValue={petData.pet_name}
                        type="text"
                        id="pet_name"
                        onChange={handleChange}
                    />
                </div>
                <div className="my-1 form-input-box">
                    <label htmlFor="description">Description:</label>
                    <textarea
                        defaultValue={petData.description}
                        type="text"
                        id="description"
                        onChange={handleChange}
                    />
                </div>
                <div className="my-1 form-input-box">
                    <label htmlFor="med_treatment">Medical Treatment:</label>
                    <input
                        defaultValue={petData.med_treatment}
                        type="text"
                        id="med_treatment"
                        onChange={handleChange}
                    />
                </div>
                <div className="my-1 form-input-box">
                    <label htmlFor="goal">Goal:</label>
                    <input
                        defaultValue={petData.goal}
                        type="number"
                        id="goal"
                        min="1"
                        max="100000"
                        onChange={handleChange}
                    />
                </div>
                <div className="my-1 form-input-box">
                    <label htmlFor="pet_category">Pet Category:</label>
                    <select
                        defaultValue={petData.pet_category}
                        type="select"
                        id="pet_category"
                        onChange={handleChange}
                    >
                        <option value="dog">dog</option>;
                        <option value="cat">cat</option>;
                        <option value="bird">bird</option>;
                        <option value="other">other</option>;
                        <option value="rabbit">rabbit</option>;
                    </select>
                </div>
                <div className="my-1 form-input-box">
                    <label htmlFor="active">Status</label>
                    <select
                        defaultValue={petData.active}
                        type="select"
                        id="active"
                        onChange={handleChange}
                    >
                        <option value="true">Open</option>;
                        <option value="false">Closed</option>;
                    </select>
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

export default UpdatePetForm;
