import React from "react";
import { useState } from "react";
import "./NotificationCard.css";

const NotificationCard = ({ notification }) => {
    return (
        <div id="notification-box">
            <h4>{notification.title}</h4>
            <p>{notification.body}</p>
            <small>{notification.date_sent}</small>
        </div>
    );
};

export default NotificationCard;
