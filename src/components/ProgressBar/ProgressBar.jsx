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
            <div id="progress-bar">
                <div style={progressStyle} id="progress"></div>
            </div>
            <h3 className="sub-text">Progress: {progressPercentage}</h3>
        </div>
    );
};

export default ProgressBar;
