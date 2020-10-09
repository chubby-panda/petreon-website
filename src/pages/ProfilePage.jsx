import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import PetCard from "../components/PetCard/PetCard";
import Sidebar from "../components/Sidebar/Sidebar";
import Loading from "../components/Loading/Loading";

function ProfilePage(props) {
    const [loggedIn, setLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);
    const [profileData, setProfileData] = useState([]);
    const [accountData, setAccountData] = useState([]);
    const [pets, setPets] = useState([]);
    let { username } = useParams();

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
        const token = window.localStorage.getItem("token");
        token != null ? setLoggedIn(true) : setLoggedIn(false);
        fetchURL(`/users/account/${username}`, setAccountData);
        fetchURL(`/users/profile/${username}`, setProfileData);
        fetchURL(`/users/${username}/pets`, setPets);
        setLoading(false);
    }, []);

    console.log(pets);

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
                {loggedIn ? (
                    <>
                        <Sidebar />
                        <div id="profile-detail" className="content-container">
                            <ProfileCard
                                profileData={profileData}
                                accountData={accountData}
                            />
                            <div id="pets-list">
                                {pets.map((projectData, key) => {
                                    return (
                                        <PetCard
                                            key={key}
                                            projectData={projectData}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div id="profile-detail" className="container">
                            <ProfileCard profileData={profileData} />
                            <div id="profile-pets">
                                {pets.map((projectData, key) => {
                                    return (
                                        <PetCard
                                            key={key}
                                            projectData={projectData}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </>
                )}
            </>
        );
    }
}

export default ProfilePage;
