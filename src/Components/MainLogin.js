import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CommonContent from './CommonContext';
import CustodianLogin from './CustodianLogin';
import Login from './Login';

function MainLogin() {
  const [activeContent, setActiveContent] = useState('student');

  const handleButtonClick = (buttonType) => {
    setActiveContent(buttonType);
  };

  return (
    <div>
      <CommonContent
        activeContent={activeContent}
        handleButtonClick={handleButtonClick}
      />

      {activeContent === 'student' ? (
        <Login />
      ) : (
        <CustodianLogin />
      )}
    </div>
  );
}

export default MainLogin;
