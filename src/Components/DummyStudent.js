// // StudentDashboard.js
// import React, { useState } from 'react';
// import DummyNavbar from './DummyNavbar';
// import './Dummy.css'

// const dummyStudents = [
//   { id: 1, name: 'John Doe', student_number: 'S12345', nationality: 'US', gender: 'Male' },
//   { id: 2, name: 'Jane Doe', student_number: 'S67890', nationality: 'UK', gender: 'Female' },
//   { id: 3, name: 'King Andy', student_number: 'S567892', nationality: 'UG', gender: 'Male' },
//   { id: 4, name: 'Jane Ruth', student_number: 'S347856', nationality: 'KE', gender: 'Female' },
//   { id: 5, name: 'Alex Max', student_number: 'S210071', nationality: 'TZ', gender: 'Male' },
//   { id: 6, name: 'Bruno Brian', student_number: 'S127845', nationality: 'RW', gender: 'Male' },
//   // Add more dummy data as needed
// ];

// function DummyStudent() {
//   const [filteredStudents, setFilteredStudents] = useState(dummyStudents);

//   const handleSearch = (studentName) => {
//     const filtered = dummyStudents.filter((student) =>
//       student.name.toLowerCase().includes(studentName.toLowerCase())
//     );
//     setFilteredStudents(filtered);
//   };

//   const handleSearchChange = (e) => {
//     const searchQuery = e.trim();
//     if (searchQuery.length === 0) {
//       setFilteredStudents(dummyStudents);
//     }
//   };

//   return (
//     <div>
//       <DummyNavbar onSearch={handleSearch} />
//       <div className='payments_effected'>
//         <h1>Our Registered Students</h1>
//         <table>
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>Name of student</th>
//               <th>Student No</th>
//               <th>Nationality</th>
//               <th>Gender</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredStudents.map((student) => (
//               <tr key={student.id}>
//                 <td>{student.id}</td>
//                 <td>{student.name}</td>
//                 <td>{student.student_number}</td>
//                 <td>{student.nationality}</td>
//                 <td>{student.gender}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default DummyStudent;



// StudentDetailsPage.js
// import React from 'react';
// import { useParams } from 'react-router-dom';
// import './Dummy.css'

// const dummyStudents = [
//   { id: 1, name: 'John Doe', student_number: 'S12345', nationality: 'US', gender: 'Male' },
//   { id: 2, name: 'Jane Doe', student_number: 'S67890', nationality: 'UK', gender: 'Female' },
//   { id: 3, name: 'King Andy', student_number: 'S567892', nationality: 'UG', gender: 'Male' },
//   { id: 4, name: 'Jane Ruth', student_number: 'S347856', nationality: 'KE', gender: 'Female' },
//   { id: 5, name: 'Alex Max', student_number: 'S210071', nationality: 'TZ', gender: 'Male' },
//   { id: 6, name: 'Bruno Brian', student_number: 'S127845', nationality: 'RW', gender: 'Male' },
//   // Add more dummy data as needed
// ];

// function  DummyStudent() {
//     const { id } = useParams();
//     const student = dummyStudents.find((s) => s.id === parseInt(id, 10));
  
//     if (!student) {
//       return <div>Student not found</div>;
//     }
  
//     return (
//       <div>
//         <h1>{student.name}'s Details</h1>
//         <ul>
//           <li>ID: {student.id}</li>
//           <li>Student Number: {student.student_number}</li>
//           <li>Nationality: {student.nationality}</li>
//           <li>Gender: {student.gender}</li>
//         </ul>
//       </div>
//     );
// }

// export default  DummyStudent;
