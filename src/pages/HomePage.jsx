import React, { useState, useEffect } from 'react'
import PetCard from '../components/PetCard/PetCard'
// import { AllPets } from '../data'

function HomePage() {
    const [petList, setPetList] = useState([])

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/pets/`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setPetList(data);
        })
    }, [])

    // if (isLogin()) {
    //     console.log(localStorage.username)
    // } else {
    //     console.log("Not logged in.")
    // }

    return (
        <>
            <div id='showcase'>
                <h1 className="text-secondary">Save a pet, change a life</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae consequuntur.</p>
                <button className="btn btn-primary my-2">Get started</button>
            </div>
            <div className="separation-container"></div>
            <div id='pet-list'>
                {petList.map((projectData, key) => {
                    return <PetCard key={key} projectData={projectData} />
                })}
            </div>
        </>
    )
}



export default HomePage