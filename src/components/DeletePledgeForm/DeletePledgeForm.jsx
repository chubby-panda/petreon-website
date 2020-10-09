import React from "react";
import { useParams, useHistory } from "react-router-dom";

const DeletePledgeForm = () => {
    const history = useHistory();
    const { petId, pledgeId } = useParams();

    const postData = async () => {
        const token = window.localStorage.getItem("token");
        const response = await fetch(
            `${process.env.REACT_APP_API_URL}/pets/${petId}/pledges/${pledgeId}/`,
            {
                method: "DELETE",
                headers: {
                    "Authorization": `Token ${token}`,
                },
            }
        );
        return response;
    };

    const handleSubmit = (e) => {
        console.log("Submit pressed...");
        postData().then((response) => {
            console.log(response);
            history.push(`/pet/${petId}`);
        });
    };

    return (
        <>
            <button
                className="btn btn-primary my-2"
                type="submit"
                onClick={handleSubmit}
            >
                Delete Pledge
            </button>
        </>
    );
};

export default DeletePledgeForm;
