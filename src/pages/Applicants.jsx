import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Alternate from "../components/Layout/User";

const Applicants = () => {
    const [placement, setPlacement] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();


    useEffect(() => {
        const fetchPlacement = async () => {
            try {
                const response = await axios.get(
                    `${process.env.REACT_APP_API_HOST}/api/v1/placements/getPlacement/${id}`
                );
                setPlacement(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching placement:", error);
                setLoading(false);
            }
        };

        fetchPlacement();
    }, [id]);

    if (loading) {
        return <div className="text-center mt-4">Loading...</div>;
    }

    if (!placement) {
        return <div className="text-center mt-4">Placement not found</div>;
    }

    return (
        <Alternate>

            <h3 className="text-xl font-semibold mb-2">Applicant Names:</h3>
            <ul>
                {placement.applicants.map((applicant) => (
                    <div className="border border-black p-4 w-40">
                        <li key={applicant._id}>{applicant.username}</li>
                    </div>
                ))}
            </ul>


        </Alternate >
    );
};

export default Applicants;