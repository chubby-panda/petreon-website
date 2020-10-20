import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./UpdateProfileImageForm.css";

const UpdateProfileImageForm = ({ profileData }) => {
    const [profileImage, setProfileImage] = useState();

    useEffect(() => {
        setProfileImage(profileData.profile_img);
    }, [profileData]);

    const handleChange = (e) => {
        setProfileImage(e.target.files[0]);
    };
    console.log(profileImage);

    const postData = async () => {
        const token = window.localStorage.getItem("token");
        const username = window.localStorage.getItem("username");
        const options = {
            method: "PUT",
            headers: {
                "Authorization": `Token ${token}`,
                "Content-Disposition": `attachment; filename="${profileImage.name}"`,
            },
            credentials: "omit",
            body: profileImage,
        };
        const url = `${process.env.REACT_APP_API_URL}/users/profile/${username}/image/`;
        const response = await fetch(url, options);
        debugger;

        return response.json();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submit pressed...");
        if (profileImage) {
            console.log("All data is there...");
            postData().then((response) => {
                console.log("RESPONSE:", response);
                // window.location.reload();
            });
        } else {
            console.log("Not all data there");
        }
    };

    return (
        <>
            <h3>Change your profile picture:</h3>
            <small>
                The option to update profile image is temporarily out of
                service. We'll have this working soon. Thank you for your
                patience.
            </small>
            <form id="update-profile-image-form">
                <div className="my-1 form-input-box">
                    <label htmlFor="image">Profile Image:</label>
                    <input
                        type="file"
                        id="profile_img"
                        onChange={handleChange}
                        accept="image/*"
                    />
                </div>
                <button
                    className="btn btn-primary my-2"
                    type="submit"
                    onClick={handleSubmit}
                >
                    Save
                </button>
            </form>
        </>
    );
};

export default UpdateProfileImageForm;
