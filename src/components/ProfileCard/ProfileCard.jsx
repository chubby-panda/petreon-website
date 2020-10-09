import React from "react";
import Loading from "../Loading/Loading";
import "./ProfileCard.css";

const ProfileCard = ({ profileData, accountData }) => {
    return (
        <div id="profile-detail-card">
            <div className="profile-detail-text">
                <h2 className="large-heading">{profileData.user}</h2>
                <p>{profileData.fun_fact}</p>
                <button className="btn btn-secondary">Message</button>
            </div>
            <div className="profile-detail-image">
                {profileData.profile_img ? (
                    <img src={profileData.profile_img} alt={profileData.user} />
                ) : null}
            </div>
        </div>
    );
};

export default ProfileCard;
