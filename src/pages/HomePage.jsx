import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import PetCard from "../components/PetCard/PetCard";
import HomeAbout from "../components/HomeAbout/HomeAbout";
import Footer from "../components/Footer/Footer";

function HomePage() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [petList, setPetList] = useState([]);

    let slideIndex = 0;
    showSlides();

    function showSlides() {
        var i;
        const slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        console.log(slideIndex);
        if (slides.length > 0) {
            slides[slideIndex - 1].style.display = "block";
        }
        setTimeout(showSlides, 4000);
    }

    useEffect(() => {
        const token = window.localStorage.getItem("token");
        token != null ? setLoggedIn(true) : setLoggedIn(false);
        fetch(`${process.env.REACT_APP_API_URL}/pets/`)
            .then((results) => {
                return results.json();
            })
            .then((data) => {
                setPetList(data);
            });
    }, []);

    return (
        <>
            <div id="showcase">
                <div id="showcase-text">
                    <h1 className="text-secondary">
                        Save a pet, change a life
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vitae consequuntur.
                    </p>
                    <Link to="/about" className="btn btn-primary my-2">
                        Learn more
                    </Link>
                </div>
                <div id="showcase-image">
                    <img
                        className="mySlides"
                        src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1"
                        alt="dogs playing"
                    />
                    <img
                        className="mySlides"
                        src="https://images.unsplash.com/photo-1570347929626-2bbc8032d98b?ixlib=rb-1.2.1"
                        alt="cat"
                    />
                    <img
                        className="mySlides"
                        src="https://images.unsplash.com/photo-1532353949707-2e77707ee8a7?ixlib=rb-1.2.1"
                        alt="dog"
                    />
                </div>
            </div>
            <div className="separation-container"></div>
            <HomeAbout />
            <div className="fullpage-dashed-line"></div>
            <div className="separation-container"></div>

            <h1 className="text-primary centered larger-heading">
                Latest Pets
            </h1>
            <div id="pet-list">
                {petList.map((projectData, key) => {
                    return <PetCard key={key} projectData={projectData} />;
                })}
            </div>
            <Footer />
        </>
    );
}

export default HomePage;
