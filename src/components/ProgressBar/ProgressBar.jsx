import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({ goal, pledged_amount }) => {
    const progressPercentage = (pledged_amount / goal) * 100 + "%";
    console.log(progressPercentage);
    const progressStyle = {
        width: progressPercentage,
    };
    return (
        <div id="progress-container">
            <h3 className="sub-text">Progress: {progressPercentage}</h3>
            <div id="progress-bar">
                <div style={progressStyle} id="progress"></div>
            </div>
        </div>
    );
};

export default ProgressBar;
