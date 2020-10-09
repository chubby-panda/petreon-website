import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Loading from "../components/Loading/Loading";
import { useParams } from "react-router-dom";

const PetImagePage = () => {
    const { petId } = useParams();
    const [images, setImages] = useState([]);
    const [petData, setPetData] = useState([]);
    const [loggedIn, setLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    console.log(petId);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/pets/${petId}/images/`)
            .then((results) => {
                return results.json();
            })
            .then((data) => {
                setImages(data);
            });
        setLoading(false);
    }, []);

    console.log(images);

    if (loading) {
        return (
            <>
                {/* <Sidebar /> */}
                <div className="content-container">
                    <Loading />
                </div>
            </>
        );
    }
    return (
        <>
            {images.length > 0 ? (
                <ul>
                    {images.map((img, key) => {
                        return (
                            <Link
                                to={{
                                    pathname: `/pet/${petId}/images/${img.id}`,
                                }}
                            >
                                <img
                                    key={key}
                                    className="small-image"
                                    src={img.image}
                                    alt="image"
                                    onClick={() => console.log(img.id)}
                                />
                            </Link>
                        );
                    })}
                </ul>
            ) : null}
        </>
    );
};

export default PetImagePage;
