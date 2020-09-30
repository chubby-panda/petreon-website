import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProfileCard from '../components/ProfileCard/ProfileCard'


function ProfilePage(props) {
    const [loading, setLoading] = useState(true)
    const [profileData, setProfileData] = useState([])
    const [accountData, setAccountData] = useState([])
    const [pets, setPets] = useState([])
    let {username} = useParams()

    const fetchURL = (url, setterFunction) => {
        fetch(`${process.env.REACT_APP_API_URL}${url}`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setterFunction(data);
        })
    }
    
    useEffect(() => {
        fetchURL(`/users/account/${username}`, setAccountData)
        fetchURL(`/users/profile/${username}`, setProfileData)
        fetchURL(`/users/${username}/pets`, setPets)
        setLoading(false)
    }, [])

    if (loading) {
        return (
            <>
            <h1>I am loading...</h1>
            </>
        )
    } else {
        return (
            <>
                <div id="pet-detail" className="container">
                    <ProfileCard profileData={profileData} />
                    <div>{accountData.email}</div>
                    {pets.map((pet, key) => {
                        return (
                            <div key={key}>
                                {pet.title}
                            </div>
                        )
                    })}
                </div>
            </>
        )
    }

}

export default ProfilePage