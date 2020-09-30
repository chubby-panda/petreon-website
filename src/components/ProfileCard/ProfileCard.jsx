import React, { useState } from 'react'
// import './PetDetailCard.css'

const ProfileCard = ({profileData}) => {

    // const [image, setImage] = useState(petData.image)

    console.log(profileData)
    if (profileData.length === 0) {
        return (
            <>
                <h1>I am loading profile detail card...</h1>
            </>
        )
    } else {
        return (
            <div className='profile-detail-card'>
                <h2>{profileData.user}</h2>
                <div className="profile-detail-content">
                    <div className="profile-detail-text">
                        <p>{profileData.fun_fact}</p>
                    </div>
                    <div className="profile-detail-image">
                        <img src={profileData.profile_img} alt={profileData.user}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileCard