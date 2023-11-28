import React, { useState } from 'react';
import logo2 from '../images/logo2.jpg';
import DummyNavbar from './DummyNavbar';


function DummyHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

 

  return (
    <header className="antialiased">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex justify-start items-center">
            <button
              id="toggleSidebar"
              aria-expanded={sidebarOpen}
              aria-controls="sidebar"
              onClick={toggleSidebar}
              className="hidden p-2 mr-3 text-gray-600 rounded cursor-pointer lg:inline hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h14M1 6h14M1 11h7"
                />
              </svg>
            </button>

            <a href="#" className="flex items-center">
              <img src={logo2} className="h-14 w-18 mr-3" alt="Muk-hostel Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                MUK HOSTELS
              </span>
            </a>
            <DummyNavbar/>
            
          
          </div>
          <div className="flex items-center lg:order-2">

              <button type="button"  data-dropdown-toggle="notification-dropdown" className="p-2 mr-1 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
                <span className="sr-only">View notifications</span>
                {/* Bell icon */}
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 20">
                    <path d="M12.133 10.632v-1.8A5.406 5.406 0 0 0 7.979 3.57.946.946 0 0 0 8 3.464V1.1a1 1 0 0 0-2 0v2.364a.946.946 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C1.867 13.018 0 13.614 0 14.807 0 15.4 0 16 .538 16h12.924C14 16 14 15.4 14 14.807c0-1.193-1.867-1.789-1.867-4.175ZM3.823 17a3.453 3.453 0 0 0 6.354 0H3.823Z"/>
                </svg>
            </button>
                <div className="relative">
                    
                  <button type="button" onClick={toggleMenu} className="flex items-center justify-center text-gray-700 hover:text-gray-900 p-1 rounded-full focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-700 focus:ring-primary-500 dark:focus:ring-primary-500 focus:outline-none">
                    <img className="w-8 h-8 rounded-full" src="https://randomuser.me/api/portraits/men/1.jpg" alt="User" />
                    <span className="sr-only">Open user menu</span>
                  </button>
               
                  {menuOpen && (
                    <div className="absolute right-0 w-36 mt-2 py-2 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" role="menuitem">Your Profile</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" role="menuitem">Settings</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" role="menuitem">Logout</a>
                    </div>
      )}
                </div>
                <button type="button" class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-1.5 text-center mr-2 ml-3 mb-2 mt-3 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">Logout</button>
              </div>
        </div>
      </nav>
        
    </header>
  );
}

export default DummyHeader;
