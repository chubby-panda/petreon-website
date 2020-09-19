import React from 'react'
import { Link } from 'react-router-dom'
import './PetCard.css'

const PetCard = (props) => {
    const { projectData } = props

    return (
        <div className='pet-card'>
            <Link to='/pet'>
                <img src={projectData.image} alt={projectData.pet_name}/>
                <h3>{projectData.title}</h3>
            </Link>
        </div>
    )
}

export default PetCard