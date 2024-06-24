import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [interactions, setInteractions] = useState([]);

    useEffect(() => {
        const fetchInteractions = async () => {
            const token = localStorage.getItem('token');
            const response = await axios.get('http://localhost:5000/interactions', {
                headers: { Authorization: `Bearer ${token}` }
            });
            setInteractions(response.data);
        };
        fetchInteractions();
    }, []);

    return (
        <div>
            <h1>User Interactions</h1>
            <table>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>IP Address</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    {interactions.map(interaction => (
                        <tr key={interaction.id}>
                            <td>{interaction.user_id}</td>
                            <td>{interaction.ip_address}</td>
                            <td>{interaction.country}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;
