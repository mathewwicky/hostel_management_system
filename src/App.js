import React, {useState} from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import './App.css';
import Card1 from './Components/Login';
import ForgotPassword from './Components/ForgotPassword';
import Register from './Components/Registration';
import NewsletterSection from './Components/NewsletterSection';
import Footer from './Components/Footer'
import Landing from './Components/Landing';
import Hero from './Components/Hero';
import FAQs from './Components/FAQs';
import Booking from './Components/Booking';
import BookDashboard from './Components/BookDashboard';
import BookingComponent from './Components/BookingComponent';
import SideMenu from './Components/SideMenu';
import Login from './Components/Login';
import { DefaultSidebar } from './Components/DefaultSidebar';
import StudentDashboard from './Components/StudentDashboard';
import ContactForm from './Components/ContactForm';
import MapContainer from './Components/MapContainer';
import PlacesSearchBox from './Components/PlaceSearchBox';
import Protected from './Components/Protected';
import RoomDetails from './Components/RoomDetail';
import HostelDetails from './Components/HostelDetails';
import DummyStudent from './Components/DummyStudent';
import SearchPage from './Components/SearchPage';
import DummyNavbar from './Components/DummyNavbar';
import SignUp from './Components/SignUp';
import CustodianSignup from './Components/CustodianSignup';
import MainComponent from './Components/MainComponent';
import MainLogin from './Components/MainLogin';

import HomePage from './Components/HomePage';
import HostelDetailsPage from './Components/HostelDetailsPage';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  const logIn = () => {
    setIsLoggedIn(true);
  };
  const logOut = () => {
    setIsLoggedIn(false);
  };

  return (
    <Routes>
      <Route path='/' element={<Landing/>}></Route>
      <Route path='/login' element={<Login logIn = {logIn}/>}></Route>
      <Route path='/' element={<Card1></Card1>}/>
      <Route path='/forgot' element={<ForgotPassword></ForgotPassword>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/dashboard/' element={<StudentDashboard/>}/>
      {/* <Route path='/dashboard' element={<Protected isLoggedIn={isLoggedIn}><StudentDashboard logOut = {logOut}/></Protected>}></Route> */}
      <Route path='/booking' element={<BookingComponent/>}></Route>
      {/* <Route path='/rooms' element={<HostelDetails/>}/> */}
      <Route path="/book/:id" element={<HostelDetails />} />
      <Route path="/signup" element={<MainComponent/>} />
      <Route path="/mainlogin" element={<MainLogin/>} />

      <Route path="/" exact component={HomePage} />
      <Route path="/book/:id" component={HostelDetailsPage} />
    </Routes>
  );
}

export default App;



// function App() {
//   return(
//     // <Card1></Card1>
//     // <ForgotPassword></ForgotPassword>
//     // <NewsletterSection></NewsletterSection>
//     // <Footer></Footer>
//     // <Landing/>
//     // <Navbar></Navbar>
//     // <Hostel></Hostel>
//     // <FAQs></FAQs>
//     // <Hero/>
//     // <Bookingform></Bookingform>
//     // <Booking></Booking>
//     // <BookDashboard></BookDashboard>
//     // <BookingComponent></BookingComponent>
//     // <SideMenu></SideMenu>
//     // <DefaultSidebar></DefaultSidebar>
//     // <StudentDashboard></StudentDashboard>
//     // <ContactForm></ContactForm>
//     // <MapContainer></MapContainer>
//     // <PlacesSearchBox/>
//     // <RoomDetails/>
//     // <HostelDetails/>
//   //  <DummyStudent/>
//   //  <SignUp/>
//   <CustodianSignup/>
//   )
// }

// export default App;


// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import DummyHeader from './Components/DummyHeader';
// import SearchPage from './Components/SearchPage';
// import DummyNavbar from './Components/DummyNavbar';
// import DummySearch from './Components/DummySearch';

// function App() {
//   return (
//       <Routes>
//         <Route path='/' element={<DummyHeader/>}/>
//         <Route path="/navbar" element={<DummyNavbar />} />
//         {/* <Route path="/search" element={<SearchPage />} /> */}
//         <Route path='/hostelsearch' element={<DummySearch/>}/>
//       </Routes>
//   );
// }

// export default App;
