import React from 'react'
import PetCard from '../components/PetCard/PetCard'
import { AllPets } from '../data'

function CategoryPage() {
    return (
        <>
            <div class="separation-container"></div>
            <div class="separation-container"></div>
            <div id='pet-list'>
                {AllPets.map((projectData, key) => {
                    return <PetCard key={key} projectData={projectData} />
                })}
            </div>
        </>
    )
}

export default CategoryPage