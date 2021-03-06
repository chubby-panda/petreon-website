import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Loading from "../components/Loading/Loading";
import UpdateProfileForm from "../components/UpdateProfileForm/UpdateProfileForm";
import UpdateProfileImageForm from "../components/UpdateProfileImageForm/UpdateProfileImageForm";
import UpdatePasswordForm from "../components/UpdatePasswordForm/UpdatePasswordForm";
import SidebarMobile from "../components/SidebarMobile/SidebarMobile";
import Footer from "../components/Footer/Footer";

const AccountSettingsPage = () => {
    const [loading, setLoading] = useState(true);
    const [profileData, setProfileData] = useState([]);
    const [accountData, setAccountData] = useState([]);
    const username = window.localStorage.getItem("username");

    const fetchURL = (url, setterFunction) => {
        fetch(`${process.env.REACT_APP_API_URL}${url}`)
            .then((results) => {
                return results.json();
            })
            .then((data) => {
                setterFunction(data);
            });
    };

    useEffect(() => {
        fetchURL(`/users/account/${username}`, setAccountData);
        fetchURL(`/users/profile/${username}`, setProfileData);
        setLoading(false);
    }, []);

    if (loading) {
        return (
            <>
                <Sidebar />
                <SidebarMobile />
                <div id="account-settings-page" className="content-container">
                    <Loading />
                </div>
            </>
        );
    } else {
        return (
            <>
                <Sidebar />
                <SidebarMobile />
                <div id="account-settings-page" className="content-container">
                    <h1>Account Settings</h1>
                    <UpdateProfileForm profileData={profileData} />
                    <UpdatePasswordForm username={username} />
                    <UpdateProfileImageForm profileData={profileData} />
                </div>
                {/* <Footer /> */}
            </>
        );
    }
};

export default AccountSettingsPage;
