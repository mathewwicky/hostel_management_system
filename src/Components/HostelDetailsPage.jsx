// HostelDetailsPage.jsx
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';

const HostelDetailsPage = () => {
  const { id } = useParams();
  const [hostel, setHostel] = useState(null);
  console.log('id of the room ', id)
  useEffect(() => {
    const fetchHostelDetails = async () => {
      try {
        console.log(id)
        const response = await axios.get(`http://localhost:8000/api/hostels/${id}/`);
        setHostel(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching hostel details:', error);
      }
    };

    fetchHostelDetails();
  }, [id]);

  if (!hostel) {
    // Handle case where hostel details are still loading
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{hostel.hostel_name} Details</h1>
      <img
        src={hostel.image}
        alt={`Hostel ${hostel.hostel_name}`}
      />
      <p>Description: {hostel.description}</p>
      <p>Location: {hostel.location}</p>
      <p>Price: {hostel.price}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default HostelDetailsPage;
