import React from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

const MapContainer = () => {
  const apiKey = 'AIzaSyArib-Vz2YYlTURfx-KJQapEEhrf4wv95A'; // Replace with your actual Google Maps API key

  const hostelData = [
    { id: 1, name: 'Hostel 1', location: { lat: 0.3309, lng:32.5738 } },
    // Add more hostels with their respective coordinates
    //const olympiaHostelLatitude = 0.3309;
    //const olympiaHostelLongitude = 32.5738;
  ];

  const handleMarkerClick = (hostel) => {
    console.log(`Clicked on ${hostel.name}`);
    // Retrieve additional information about the hostel and display it
  };

  return (
    <GoogleMap
   
      center={{ lat: 0.3136, lng: 32.5814 }}
      zoom={14}
      mapContainerStyle={{ height: '400px', width: '100%' }}
      options={{ disableDefaultUI: true, zoomControl: true }}
      onLoad={(map) => {
        hostelData.forEach((hostel) => {
          new window.google.maps.Marker({
            position: hostel.location,
            map,
            title: hostel.name,
            animation: window.google.maps.Animation.DROP,
          }).addListener('click', () => handleMarkerClick(hostel));
        });
      }}
    />
  );
};

export default MapContainer;
