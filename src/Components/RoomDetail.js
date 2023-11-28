import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { removeOneImagesPath } from '../utils/formatUrls'; // Import the utility function

const RoomDetail = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);

  useEffect(() => {
    const fetchRoomDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/hostels/${id}/`);
        setRoom(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching room details:', error);
      }
    };

    console.log('Room ID:', id);

    fetchRoomDetails();
  }, [id]);

  if (!room) {
    return <div>Loading...</div>;
  } else {
    const imageUrl = removeOneImagesPath(room.image); // Use the same logic to construct the image URL
    return (
      <div>
        <h1>{room.room_name} Details</h1>
        <img src={imageUrl} alt={`Room ${room.room_name}`} /> {/* Display the image */}
        <p>Category: {room.category}</p>
        <p>Price: {room.price}</p>
        <p>Description: {room.description}</p>
        {/* Add more details as needed */}
        <p>Security: {room.security ? 'Yes' : 'No'}</p>
        <p>Shuttle: {room.shuttle ? 'Yes' : 'No'}</p>
        <p>Reading Room: {room.reading_room ? 'Yes' : 'No'}</p>
        <p>WiFi: {room.wifi ? 'Yes' : 'No'}</p>
        <p>Contact: {room.contact}</p>
        <p>Website: {room.website}</p>
      </div>
    );
  }
};

export default RoomDetail;
