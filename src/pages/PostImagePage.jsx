import React from "react";
import { useParams } from "react-router-dom";
import PostImageForm from "../components/PostImageForm/PostImageForm";

function PostImagePage() {
    const { petId } = useParams;

    return (
        <>
            <div className="container">
                <h1 className="text-primary my-4">Step 2: Upload an image</h1>
                <p>
                    We find that close-up, high-quality{" "}
                    <strong>landscape-oriented</strong> images of your pet work
                    the best. For best loading times, try to keep it to around
                    600x900.
                </p>
                <PostImageForm petId={petId} />
            </div>
        </>
    );
}

export default PostImagePage;
