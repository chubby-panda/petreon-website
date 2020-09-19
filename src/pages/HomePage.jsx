import React from 'react'
import PetCard from '../components/PetCard/PetCard'
import { AllPets } from '../data'

function HomePage() {
    return (
        <div id='pet-list'>
            {AllPets.map((projectData, key) => {
                return <PetCard key={key} projectData={projectData} />
            })}
        </div>
    )
}

export default HomePage