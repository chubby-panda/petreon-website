import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import "./PetCard.css";

const PetCard = (props) => {
    const { projectData } = props;
    const [images, setImages] = useState([]);

    let date;
    if (projectData.date_created != undefined) {
        date = new Date(projectData.date_created).toDateString();
    }

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/pets/${projectData.id}/images`)
            .then((results) => {
                return results.json();
            })
            .then((data) => {
                setImages(data);
            });
    }, []);

    if (images.length < 1) {
        return <div className="pet-card"></div>;
    } else {
        return (
            <Link to={`/pet/${projectData.id}`}>
                <div className="pet-card">
                    <div className="pet-card-text">
                        <h2>{projectData.title}</h2>
                        <small>{date}</small>
                        <small className="text-primary text-upper mx-1">
                            {projectData.pet_category}
                        </small>
                    </div>
                    <div className="pet-card-image">
                        <img src={images[0].image} alt={projectData.title} />
                    </div>
                </div>
            </Link>
        );
    }
};

export default PetCard;
