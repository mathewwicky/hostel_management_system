import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Dummy.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faWifi, faShieldAlt, faPhone, faBed, faUserFriends } from "@fortawesome/free-solid-svg-icons";

const dummyhostels = [
    { id: 1, name: 'Hostel A', location: 'City Center', price: '$50/night', phone: '+123-456-7890',shuttle: '2', wifi: 'available', security: '24/7', images: ['r1.png', 'r2.png', 'r1.png'] },
    { id: 2, name: 'Hostel B', location: 'Near Beach', price: '$45/night', phone: '+123-456-7890',shuttle: '1', wifi: 'available', security: '24/7', images: ['r2.png', 'r3.png', 'r2.png'] },
    { id: 3, name: 'Hostel C', location: 'Downtown', price: '$55/night', phone: '+123-456-7890',shuttle: 'N/A', wifi: 'N/A', security: '24/7', images: ['r3.png', 'r2.png', 'r3.png'] },
    { id: 4, name: 'Hostel D', location: 'Mountain View', price: '$60/night', phone: '+123-456-7890',shuttle: '1', wifi: 'available', security: 'N/A', images: ['r1.png', 'r2.png', 'r1.png'] },
    { id: 5, name: 'Hostel E', location: 'Riverside', price: '$48/night', phone: '+123-456-7890',shuttle: '2', wifi: 'available', security: '24/7', images: ['r2.png', 'r3.png', 'r2.png'] },
    { id: 6, name: 'Hostel F', location: 'Old Town', price: '$52/night', phone: '+123-456-7890',shuttle: '1', wifi: 'N/A', security: '24/7', images: ['r3.png', 'r2.png', 'r3.png'] },
    { id: 7, name: 'Hostel G', location: 'Lakefront', price: '$58/night', phone: '+123-456-7890',shuttle: '1', wifi: 'available', security: 'N/A', images: ['r2.png', 'r3.png', 'r1.png'] },
    { id: 8, name: 'Hostel H', location: 'Countryside', price: '$56/night', phone: '+123-456-7890',shuttle: 'N/A', wifi: 'available', security: '24/7', images: ['r2.png', 'r2.png', 'r1.png'] },
    { id: 9, name: 'Hostel I', location: 'Seaside', price: '$62/night', phone: '+123-456-7890',shuttle: '1', wifi: 'N/A', security: 'N/A', images: ['r3.png', 'r2.png', 'r3.png'] },
  ];
  

// function DummySearch() {
//   const location = useLocation();
//   const searchQuery = new URLSearchParams(location.search).get('name') || '';
// //   const [filteredStudents, setFilteredStudents] = useState([]);
// const [filteredHostels, setFilteredHostels] = useState([]);

//   useEffect(() => {
//     const filtered = dummyhostels.filter((hostel) =>
//       hostel.name.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//     setFilteredHostels(filtered);
//   }, [searchQuery]);

//   return (
//     <div>
//       <h1>Search Results</h1>
//       {filteredHostels.length === 0 ? (
//         <p>No Hostel registered with the name "{searchQuery}"</p>
//       ) : (
//         <table className="student-table">
//           {/* <thead>
//             <tr>
//               <th>ID</th>
//               <th>Name</th>
//               <th>Location</th>
//               <th>Price</th>
//               <th>Contact <FontAwesomeIcon icon={faPhone} /></th>
//               <th>Shuttle</th>
//               <th>Wifi <FontAwesomeIcon icon={faWifi}/></th>
//               <th>Security</th>
//             </tr>
//           </thead> */}
//           <thead>
//             <tr>
//               <th>ID</th>
//             </tr>
//               <th>Name</th>
//               <tr>
//                 <th>Location</th>
//               </tr>
//               <tr>
//               <th>Price</th>
//               </tr>
//               <tr>
//                 <th>Contact <FontAwesomeIcon icon={faPhone} /></th>
//               </tr>
//               <tr>
//               <th>Shuttle</th>
//                 </tr>
//             <tr> 
//                 <th>Wifi <FontAwesomeIcon icon={faWifi}/></th>
//             </tr>
//              <tr>
//               <th>Security</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredHostels.map((hostel) => (
//               <tr key={hostel.id}>
//                 <td>{hostel.id}</td>
//                 <td>{hostel.name}</td>
//                 <td>{hostel.location}</td>
//                 <td>{hostel.price}</td>
//                 <td>{hostel.phone}</td> 
//                 <td>{hostel.shuttle}</td>
//                 <td>{hostel.wifi}</td>
//                 <td>{hostel.security}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// }

// export default  DummySearch;


function DummySearch() {
    const location = useLocation();
    const searchQuery = new URLSearchParams(location.search).get('name') || '';
    const [filteredHostels, setFilteredHostels] = useState([]);
  
    useEffect(() => {
      const filtered = dummyhostels.filter((hostel) =>
        hostel.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredHostels(filtered);
    }, [searchQuery]);
  
    return (
      <div>
        <h1>Search Results</h1>
        {filteredHostels.length === 0 ? (
          <p>No Hostel registered with the name "{searchQuery}"</p>
        ) : (
          <table className="student-table">
            <tbody>
              {filteredHostels.map((hostel) => (
                <React.Fragment key={hostel.id}>
                  <tr>
                    <td>ID: {hostel.id}</td>
                  </tr>
                  <tr>
                    <td>Name: {hostel.name}</td>
                  </tr>
                  <tr>
                    <td>Location: {hostel.location}</td>
                  </tr>
                  <tr>
                    <td>Price: {hostel.price}</td>
                  </tr>
                  <tr>
                    <td>Contact <FontAwesomeIcon icon={faPhone} />: {hostel.phone}</td>
                  </tr>
                  <tr>
                    <td>Shuttle: {hostel.shuttle}</td>
                  </tr>
                  <tr>
                    <td>Wifi <FontAwesomeIcon icon={faWifi}/>: {hostel.wifi}</td>
                  </tr>
                  <tr>
                    <td>Security: {hostel.security}</td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }
  
  export default DummySearch;
