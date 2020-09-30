import React, { useState } from 'react'
import './PetDetailCard.css'



const PetDetailCard = ({petData, pledges}) => {

    const [image, setImage] = useState(petData.image)
    const showNextImage = (image) => {
        setImage(petData.image2)
    }

    const showPreviousImage = (image) => {
        setImage(petData.image)
    }

    console.log(petData)
    if (petData.length === 0) {
        return (
            <>
                <h1>I am loading pet detail card...</h1>
            </>
        )
    } else {
        return (
            <div className='pet-detail-card'>
                <h2>{petData.title}</h2>
                <div className="pet-detail-content">
                    <div className="pet-detail-content-text">
                        <p>{petData.description}</p>
                        <p>{`Created at: ${petData.date_created}`}</p>
                        <p>{`Status: ${petData.active ? "open to new pledges" : "Expired"}`}</p>
                        <p>{`Goal: ${petData.goal}, Pledged amount: ${petData.pledged_amount}`}</p>
                    </div>
                    <div className="pet-detail-content-image">
                        <img src={image} alt={petData.title}/>
                        <div className="pet-detail-image-buttons">
                            <button onClick={showPreviousImage}><i className="fas fa-chevron-left fa-3x"></i></button>
                            <button onClick={showNextImage}><i className="fas fa-chevron-right fa-3x"></i></button>
                        </div>
                    </div>
                </div>
                <div className="pet-detail-pledges">
                    <h3>Pledges:</h3>
                    <ul>
                        {pledges.map((pledgeData, key) => {
                            return (
                                <li key={key}>
                                    {`$${pledgeData.amount} from ${pledgeData.supporter}`}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default PetDetailCard