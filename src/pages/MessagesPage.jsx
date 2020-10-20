import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import SidebarMobile from "../components/SidebarMobile/SidebarMobile";
import Footer from "../components/Footer/Footer";

const MessagesPage = () => {
    return (
        <>
            <Sidebar />
            <SidebarMobile />
            <div id="messages-page" className="content-container">
                <h1>Messaging app, coming soon!</h1>
                <p>
                    We can't wait to launch our new messaging feature in the
                    next few weeks. This will let you to connect with fellow
                    animal lovers and pet owners on Petreon. It will also allow
                    you to personally thank people who may have generously
                    supported your fundraisers and pet recoveries. We are very
                    excited about this and hope that it will foster a community
                    spirit on Petreon. Until then, we thank you for your
                    continued patience and loyalty.
                </p>
                <p>Have a great day!</p>
                <img
                    className="logo"
                    src={window.location.origin + "/logo1.png"}
                />
            </div>
            {/* <Footer /> */}
        </>
    );
};

export default MessagesPage;
