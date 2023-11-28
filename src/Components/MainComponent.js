import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CommonContent from './CommonContext';
import CustodianSignup from './CustodianSignup';
import Register from './Registration';

function MainComponent() {
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
        <Register />
      ) : (
        <CustodianSignup />
      )}
    </div>
  );
}

export default MainComponent;
