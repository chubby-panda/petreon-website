import React from "react";
import PostPetForm from "../components/PostPetForm/PostPetForm";

function PetCreatePage() {
    return (
        <>
            <div className="container">
                <h1 className="text-primary my-4">Start a Fundraiser</h1>
                <PostPetForm />
            </div>
        </>
    );
}

export default PetCreatePage;
