// // Navbar.js
// import React from 'react';
// import './Dummy.css'

// function DummyNavbar({ onSearch }) {
//   const handleSearch = (e) => {
//     e.preventDefault();
//     const studentName = e.target.student.value;
//     onSearch(studentName);
//   };

//   return (
//     <div className='filter_students'>
//       <form onSubmit={handleSearch}>
//         <input type='text' name='student' placeholder='student name' />
//         <button type='submit'>Search Student</button>
//       </form>
//     </div>
//   );
// }

// export default DummyNavbar;


// Navbar.js
// Navbar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function DummyNavbar() {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    // const studentName = e.target.student.value;
    const hostelname = e.target.hostel.value;
    // navigate(`/search?name=${studentName}`);
    navigate(`/hostelsearch?name=${hostelname}`);
  };

  return (
    <div className=' flex items-center '>
      <form onSubmit={handleSearch} className="flex items-center ml-5">
        {/* <input type='text' name='student' placeholder='student name' className="border border-gray-300 px-2 py-2 mr-2 rounded-md focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:border-blue-500 dark:focus:ring-blue-800"/>
        <button type='submit' className="bg-blue-500 text-white px-2 py-2 rounded-md focus:outline-none hover:bg-blue-600 focus:ring focus:border-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:border-blue-500 dark:focus:ring-blue-800">Search Student</button> */}
        <input type='text' name='hostel' placeholder='hostel name' className="border border-gray-300 px-2 py-2 mr-2 rounded-md focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:border-blue-500 dark:focus:ring-blue-800"/>
        <button type='submit' className="bg-blue-500 text-white px-2 py-2 rounded-md focus:outline-none hover:bg-blue-600 focus:ring focus:border-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:border-blue-500 dark:focus:ring-blue-800">Search Hostel</button>
      </form>
    </div>
  );
}

export default DummyNavbar;


