import React from "react";
import { useState } from "react";
import "./NotificationCard.css";

const NotificationCard = ({ notification }) => {
    const [checked, setChecked] = useState(false);

    const displayText = (e) => {
        console.log(e.target);
    };

    return (
        <button
            onClick={displayText}
            className="new-notification"
            id="notification-box"
        >
            <h4>{notification.title}</h4>
            <p>{notification.body}</p>
            <small>{notification.date_sent}</small>
            {/* <input type="checkbox"></input> */}
        </button>
    );
};

export default NotificationCard;
