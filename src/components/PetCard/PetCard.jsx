import React from 'react'
import { Link } from 'react-router-dom'
import './PetCard.css'

const PetCard = (props) => {
    const { projectData } = props

    return (
        <div className='pet-card'>
            <Link to={`/pet/${projectData.id}`}>
                {/* <div className="pet-card-image">
                    <img src={`${process.env.REACT_APP_API_URL}${projectData.image}`} alt={projectData.pet_name}/>
                </div> */}
                <div className='pet-card-text'>
                    <h2>{projectData.title}</h2>
                </div>
            </Link>
        </div>
    )
}

export default PetCard