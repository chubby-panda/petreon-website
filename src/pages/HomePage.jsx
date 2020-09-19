import React from 'react'
import { AllPets } from '../data'

function HomePage() {
    return (
        <div>
            {AllPets.map((projectData, key) => {
                return <div key={key}>{projectData.title}</div>
            })}
        </div>
    )
}

export default HomePage