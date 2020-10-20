import React from "react";
import PostPetForm from "../components/PostPetForm/PostPetForm";
import Sidebar from "../components/Sidebar/Sidebar";
import SidebarMobile from "../components/SidebarMobile/SidebarMobile";
import Footer from "../components/Footer/Footer";

function PetCreatePage() {
    return (
        <>
            <Sidebar />
            <SidebarMobile />
            <div id="pet-create-page" className="content-container">
                <h1 className="text-primary my-4">Start a Fundraiser</h1>
                <PostPetForm />
            </div>
            {/* <Footer /> */}
        </>
    );
}

export default PetCreatePage;
