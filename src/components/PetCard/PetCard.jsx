import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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

    console.log(images);

    if (images.length < 1) {
        return <h1>loading...</h1>;
    } else {
        return (
            <div className="pet-card">
                <Link to={`/pet/${projectData.id}`}>
                    <div className="pet-card-text">
                        <h2 className="sub-text">{projectData.title}</h2>
                        <small>{date}</small>
                        <small className="text-primary text-upper mx-1">
                            {projectData.pet_category}
                        </small>
                    </div>
                    <img src={images[0].image} alt={projectData.title} />
                </Link>
            </div>
        );
    }
};

export default PetCard;
