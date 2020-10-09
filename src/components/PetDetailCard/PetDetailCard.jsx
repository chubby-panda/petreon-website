import React from "react";
import { Link } from "react-router-dom";
import ProgressBar from "../ProgressBar/ProgressBar";
import PledgeForm from "../PledgeForm/PledgeForm";
import Loading from "../Loading/Loading";
import "./PetDetailCard.css";

const PetDetailCard = ({ petData, pledges, images, petId }) => {
    const username = window.localStorage.getItem("username");
    let pledge_content;
    if (pledges.length > 0) {
        pledge_content = (
            <ul>
                {pledges.map((pledgeData, key) => {
                    if (pledgeData.supporter === true) {
                        return (
                            <Link to="/" key={key}>
                                {`$${pledgeData.amount} from an anonymous supporter`}
                            </Link>
                        );
                    } else {
                        return (
                            <Link to={`/profile/${pledgeData.supporter}`}>
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
        pledge_content = <p>No pledges.</p>;
    }

    let date;
    if (petData.date_created !== undefined) {
        date = new Date(petData.date_created).toDateString();
    }

    if (petData.length === 0 || images.length === 0) {
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
                        {/* <p>{petData.owner}</p>
                        <p>{`Posted ${date}`}</p> */}
                        <p className="text-primary">{`Status: ${
                            petData.active ? "Open" : "Expired"
                        }`}</p>
                        {/* <p>{`Goal: $${petData.goal}, Pledged amount: $${petData.pledged_amount}`}</p> */}
                    </div>
                    <div className="pet-detail-content-image">
                        <img src={images[0].image} alt={petData.title} />
                    </div>
                </div>
                <ProgressBar
                    goal={petData.goal}
                    pledged_amount={petData.pledged_amount}
                />
                <div className="pet-detail-pledges">
                    <h3>Pledges:</h3>
                    {petData.owner !== username ? (
                        <PledgeForm petId={petId} />
                    ) : null}

                    {pledge_content}
                </div>
            </div>
        );
    }
};

export default PetDetailCard;
