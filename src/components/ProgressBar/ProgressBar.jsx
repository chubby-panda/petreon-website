import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({ goal, pledged_amount }) => {
    const progressPercentage = Math.round((pledged_amount / goal) * 100) + "%";
    const remainder = Math.round(goal - pledged_amount, 2);
    console.log(progressPercentage);
    const progressStyle = {
        width: progressPercentage,
    };
    return (
        <div id="progress-container">
            <div id="progress-bar">
                <div style={progressStyle} id="progress"></div>
            </div>
            <h3 className="sub-text">
                Progress: ${pledged_amount} of ${goal}.
            </h3>
        </div>
    );
};

export default ProgressBar;
