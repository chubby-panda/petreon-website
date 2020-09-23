import PetDetailCard from '../components/PetDetailCard/PetDetailCard'
import { OnePet } from '../data'

function PetPage() {
    return (
        <>
            <div class="separation-container"></div>
            <div id="pet-detail" class="container">
                <PetDetailCard OnePet={OnePet} />
            </div>
        </>
    )
}

export default PetPage