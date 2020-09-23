import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PetDetailCard from '../components/PetDetailCard/PetDetailCard'
// import { OnePet } from '../data'

function PetPage(props) {
    const [loading, setLoading] = useState(true)
    const [petData, setPetData] = useState([])
    const [pledges, setPledges] = useState([])
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
        const petsIdUrl = `/pets/${id}`
        fetchURL(petsIdUrl, setPetData)
        fetchURL(`${petsIdUrl}/pledges`, setPledges)
        setLoading(false)
    }, [])

    if (loading) {
        return (
            <>
            <div className="separation-container"></div>
            <h1>I am loading...</h1>
            </>
        )
    } else {
        return (
            <>
                <div className="separation-container"></div>
                <div id="pet-detail" className="container">
                    <PetDetailCard petData={petData} pledges={pledges} />
                </div>
            </>
        )
    }

}

export default PetPage