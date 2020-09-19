import React from 'react'
import { OnePet } from '../data'

function PetPage() {
    return <div>
        <h2>{OnePet.title}</h2>
        <h3>{`Created at: ${OnePet.date_created}`}</h3>
        <h3>{`Status: ${OnePet.active ? "open to new pledges" : "Expired"}`}</h3>
        <h3>Pledges:</h3>
        <ul>
            {OnePet.pledges.map((pledgeData, key) => {
                return (
                    <li>
                        {`$${pledgeData.amount} from ${pledgeData.supporter}`}
                    </li>
                )
            })}
        </ul>
    </div>
}

export default PetPage