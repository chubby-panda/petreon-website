import React from "react";
import { Link } from "react-router-dom";
import ProgressBar from "../ProgressBar/ProgressBar";
import PledgeForm from "../PledgeForm/PledgeForm";
import PostImageForm from "../PostImageForm/PostImageForm";
import Loading from "../Loading/Loading";
import "./PetDetailCard.css";

const PetDetailCard = ({ petData, pledges, images, petId }) => {
    const username = window.localStorage.getItem("username");
    let formContent;

    let slideIndex = 0;
    if (images.length > 0) {
        showSlides();
    }

    function showSlides() {
        var i;
        const images = document.getElementsByClassName("mySlides");
        for (i = 0; i < images.length; i++) {
            images[i].style.display = "none";
        }
        console.log(images);
        slideIndex++;
        if (slideIndex > images.length) {
            slideIndex = 1;
        }
        if (images.length > 0) {
            images[slideIndex - 1].style.display = "block";
        }
        setTimeout(showSlides, 4000);
    }

    let isSupporter;
    let i;
    for (i = 0; i < pledges.length; i++) {
        if (pledges[i].supporter === username) {
            isSupporter = true;
        }
        i++;
    }

    if (petData.owner !== username) {
        if (isSupporter) {
            formContent = (
                <h1 className="text-primary">Thank you for your pledge!</h1>
            );
        } else {
            formContent = <PledgeForm petId={petId} />;
        }
    } else {
        formContent = <h1>These are the pledges so far...</h1>;
    }

    console.log(isSupporter);
    let imageContent;
    if (images.length > 0) {
        imageContent = (
            <>
                <div className="pet-detail-content-image">
                    {images.map((img, key) => {
                        return (
                            <img
                                className="mySlides"
                                key={key}
                                src={img.image}
                                alt="image"
                                onClick={() => console.log(img.id)}
                            />
                        );
                    })}
                </div>
            </>
        );
    } else {
        if (petData.owner === username) {
            imageContent = (
                <div id="pet-detail-inner-form">
                    <small>
                        You haven't uploaded a photo yet. Uploading a
                        high-quality photo greatly increases your chance of
                        getting funded.
                    </small>
                    <PostImageForm petId={petId} />
                </div>
            );
        } else {
            imageContent = null;
        }
    }

    let pledge_content;
    if (pledges.length > 0) {
        pledge_content = (
            <ul id="pledge-list">
                <h4>Pledges:</h4>
                {pledges.map((pledgeData, key) => {
                    if (pledgeData.anonymous === true) {
                        return (
                            <p key={key}>
                                {`$${pledgeData.amount} from an anonymous supporter`}
                            </p>
                        );
                    } else {
                        return (
                            <Link to={`${petId}/pledge/${pledgeData.id}`}>
                                <li key={key}>
                                    {`$${pledgeData.amount} from ${pledgeData.supporter}`}
                                </li>
                            </Link>
                        );
                    }
                })}
            </ul>
        );
    } else {
        pledge_content = (
            <ul id="pledge-list">
                <h4>There are no pledges.</h4>
            </ul>
        );
    }

    let date;
    if (petData.date_created !== undefined) {
        date = new Date(petData.date_created).toDateString();
    }

    if (petData.length === 0) {
        return (
            <div className="pet-detail-card">
                <div className="separation-container"></div>
                <Loading />
            </div>
        );
    } else {
        return (
            <div className="pet-detail-card">
                <div className="pet-detail-content">
                    <div className="pet-detail-content-text">
                        <h2>{petData.title}</h2>
                        <small>
                            {`Posted ${date} | `}
                            <Link
                                className="text-primary"
                                to={`/profile/${petData.owner}`}
                            >{`${petData.owner}`}</Link>
                        </small>
                        <p>{petData.description}</p>
                        <p className="text-primary">{`Status: ${
                            petData.active ? "Open" : "Expired"
                        }`}</p>
                    </div>
                    {imageContent}
                </div>
                <ProgressBar
                    goal={petData.goal}
                    pledged_amount={petData.pledged_amount}
                />
                <div className="pet-detail-pledges">
                    <div id="pledge-section">
                        <div id="pledge-form-container">{formContent}</div>
                        {pledge_content}
                    </div>
                </div>
            </div>
        );
    }
};

export default PetDetailCard;
