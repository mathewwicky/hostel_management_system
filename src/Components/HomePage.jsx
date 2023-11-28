import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './HomePage.css';
import { removeOneImagesPath } from '../utils/formatUrls';

const HomePage = () => {
  const [hostels, setHostels] = useState([]);
  const [currentImageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const fetchHostels = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/hostels/');
        setHostels(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching hostels:', error);
      }
    };

    fetchHostels();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % 3); // Assuming each hostel has 3 images
    }, 5000);

    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  return (
    <div>
      <div className="card-grid">
        {hostels.map((hostel) => {
          console.log(removeOneImagesPath(hostel.image))
          const imageUrl = removeOneImagesPath(hostel.image)
          return (
            <div className="card" key={hostel.id}>
              <img
                src={imageUrl}
                alt={`Hostel ${hostel.hostel_name}`}
                className="card-img-top"
              />
  
              <div className="card-body">
                <h5 className="card-title">{hostel.hostel_name}</h5>
                <p className="card-text">{hostel.description}</p>
                <p>
                  <span className="locate">Location:</span> {hostel.location}
                </p>
                <p className="card-title">Price: {hostel.price}</p>
                <div className="row">
                  <div className="col-6">
                    <Link to={{ pathname: `/book/${hostel.id}`, state: { hostel } }}>
                      <button
                        type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                      >
                        More Details
                      </button>
                    </Link>
                  </div>
                  <div className="col-6">
                    <div className="rating">
                      <span className="star">&#9733;</span>
                      <span className="star">&#9733;</span>
                      <span className="star">&#9733;</span>
                      <span className="star">&#9733;</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default HomePage;
