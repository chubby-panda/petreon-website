import React, { useState, useEffect } from "react";
import NotificationCard from "../components/NotificationCard/NotificationCard";
import Sidebar from "../components/Sidebar/Sidebar";
import Loading from "../components/Loading/Loading";
import { useParams } from "react-router-dom";

function NotificationsPage(props) {
    const [loading, setLoading] = useState(true);
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        const token = window.localStorage.getItem("token");
        fetch(`${process.env.REACT_APP_API_URL}/notifications`, {
            method: "GET",
            headers: {
                "Authorization": `Token ${token}`,
            },
        })
            .then((results) => {
                return results.json();
            })
            .then((data) => {
                setNotifications(data);
                setLoading(false);
            });
    }, []);

    let notificationsContent;

    if (notifications.length > 0) {
        notificationsContent = (
            <ul id="notifications-wrapper">
                {notifications.map((notification, key) => {
                    return (
                        <NotificationCard
                            notification={notification}
                            key={key}
                        />
                    );
                })}
            </ul>
        );
    } else {
        notificationsContent = (
            <h2 className="mx-4">You don't have any notifications.</h2>
        );
    }

    console.log(notifications);

    if (loading) {
        return (
            <>
                <Sidebar />
                <div className="content-container">
                    <Loading />
                </div>
            </>
        );
    } else {
        return (
            <>
                <Sidebar />

                <div className="content-container">{notificationsContent}</div>
            </>
        );
    }
}

export default NotificationsPage;
