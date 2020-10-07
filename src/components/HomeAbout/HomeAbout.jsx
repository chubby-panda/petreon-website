import React from "react";
import "./HomeAbout.css";

const HomeAbout = () => {
    return (
        <div id="homepage-about" className="container">
            <div id="homepage-about-1">
                <h1 className="text-primary centered larger-heading">
                    What is Petreon?
                </h1>
                <p className="larger-text centered">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Pariatur alias est natus et itaque sapiente aspernatur
                    impedit earum. Excepturi, ipsam ex deleniti ea eius nobis
                    aliquid labore autem nulla repudiandae? Accusamus numquam
                    blanditiis ullam quo excepturi recusandae rerum velit
                    quibusdam!
                </p>
            </div>
            <div id="homepage-about-2" className="homepage-about-inner">
                <div className="homepage-about-inner-text">
                    <h3 className="large-heading">
                        Help millions of pets with life-threatening illnesses
                    </h3>
                    <p className="larger-text">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Dolore sapiente tempore similique fuga at sint
                        ipsa facilis neque numquam voluptates.
                    </p>
                </div>
                <div className="image-container">
                    <img
                        src="https://cdn.pixabay.com/photo/2017/08/07/12/35/cat-2603395_960_720.jpg"
                        alt="cat and dog"
                    />
                </div>
            </div>
            <div
                id="homepage-about-3"
                className="homepage-about-inner reverse-flex"
            >
                <div className="homepage-about-inner-text">
                    <h3 className="large-heading">
                        Connect with animals lovers around the world
                    </h3>
                    <p className="larger-text">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Blanditiis itaque nisi ad eaque! Eaque provident,
                        itaque blanditiis dolor.
                    </p>
                </div>
                <div className="image-container">
                    <img
                        src="https://cdn.pixabay.com/photo/2017/06/20/22/14/men-2425121_960_720.jpg"
                        alt="people with pets"
                    />
                </div>
            </div>
            <div id="homepage-about-4" className="homepage-about-inner">
                <div className="homepage-about-inner-text">
                    <h3 className="large-heading">
                        Get financial aid for your family pet
                    </h3>
                    <p className="larger-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ut, nemo saepe explicabo impedit et distinctio debitis
                        quia cum dolorem eum.
                    </p>
                </div>
                <div className="image-container">
                    <img
                        src="https://cdn.pixabay.com/photo/2017/12/27/14/02/friends-3042751_960_720.jpg"
                        alt="pet and owner"
                    />
                </div>
            </div>
        </div>
    );
};

export default HomeAbout;
