import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProfileCard from '../components/ProfileCard/ProfileCard'


function ProfilePage(props) {
    const [loading, setLoading] = useState(true)
    const [profileData, setProfileData] = useState([])
    // const [pets, setPets] = useState([])
    let {id} = useParams()

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
        fetchURL(`/users/profile/${id}`, setProfileData)
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
                </div>
            </>
        )
    }

}

export default ProfilePage