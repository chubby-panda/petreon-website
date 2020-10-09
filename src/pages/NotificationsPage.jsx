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

                <div className="content-container">
                    <ul>
                        {notifications.map((notification, key) => {
                            return (
                                <NotificationCard
                                    notification={notification}
                                    key={key}
                                />
                            );
                        })}
                    </ul>
                </div>
            </>
        );
    }
}

export default NotificationsPage;
