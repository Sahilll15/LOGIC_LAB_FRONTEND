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

            <div className="mt-10">
                <h3 className="text-xl font-semibold mb-4">Applicant Names:</h3>
                <ul className="flex flex-col gap-4">
                    {placement.applicants.map((applicant) => (
                        <div className="border border-black p-4 w-1/2 rounded-lg flex gap-4">
                            <div>

                                <img className="w-20" src={applicant.profile} alt="" />

                            </div>
                            <div>
                                <li key={applicant._id}>{applicant.username}</li>
                                <li>{applicant.email}</li>
                                <li>{applicant.Department}</li>
                            </div>

                        </div>
                    ))}
                </ul>
            </div>


        </Alternate >
    );
};

export default Applicants;