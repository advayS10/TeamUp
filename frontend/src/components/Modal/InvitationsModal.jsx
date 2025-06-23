import React, { useEffect, useState } from "react";
import { Button } from '../index'
import { useNavigate } from "react-router-dom";

const InvitationsModal = ({ userId, isOpen, onClose }) => {
    const [invitations, setInvitations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate()

    const inviteDelete = async (inviteid) => {
        try {
            const response = await fetch('http://localhost:5000/api/deleteInvite', {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    _id: inviteid
                })
            })

            const res = await response.json()
            console.log(res)
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        if (!isOpen) return; // Don't fetch data if modal is closed

        const fetchInvitations = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/invitations/${userId}`, {
                    method: 'GET', // Set the method to GET
                    headers: {
                        'Content-Type': 'application/json', // Specify content type
                    }
                });

                const data = await response.json();

                if (data.success && Array.isArray(data.invitations)) {
                    setInvitations(data.invitations);
                } else {
                    setInvitations([]); // Handle unexpected response structure
                }
            } catch (err) {
                setError("Failed to load invitations.");
                console.error("Error fetching invitations:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchInvitations();
    }, [isOpen, userId]);


    if (!isOpen) return null; // Return nothing if modal is closed

    return (
        <div className="fixed right-2 top-16 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-96 p-6">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Invitations</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-800"
                    >
                        ✕
                    </button>
                </div>
                {loading ? (
                    <div className="text-center">Loading...</div>
                ) : error ? (
                    <div className="text-center text-red-500">{error}</div>
                ) : invitations.length === 0 ? (
                    <div className="text-gray-500">No invitations found.</div>
                ) : (
                    <ul className="space-y-4">
                        {invitations.map((invite) => (
                            <li
                                key={invite._id}
                                className="p-4 border border-gray-300 rounded-lg shadow-sm flex justify-between items-center"
                            >  
                                <div className="w-[60%]">
                                    <p className="text-gray-700">
                                        <span className="font-bold">Event:</span> {invite.event.sport}
                                    </p>
                                    <p className="text-gray-700">
                                        <span className="font-bold">Invited By:</span>{" "}
                                        {invite.invited_by.name}
                                    </p>
                                </div>
                                <div>
                                    <Button className="bg-black text-white text-sm" onClick={() => navigate(`/events/${invite.event._id}`)}>Visit</Button>
                                </div>
                                <div>
                                    <Button 
                                    onClick={()=> inviteDelete(invite._id)}
                                    ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(255,0,0,1)"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg></Button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default InvitationsModal;
