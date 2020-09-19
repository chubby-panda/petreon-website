import React from 'react'
import { Link } from 'react-router-dom'
import './PetCard.css'

const PetCard = (props) => {
    const { projectData } = props

    return (
        <div className='pet-card'>
            <Link to='/pet'>
                <img src={projectData.image} alt={projectData.pet_name}/>
                <div className='pet-card-text'>
                    <p>{projectData.title}</p>
                </div>
            </Link>
        </div>
    )
}

export default PetCard