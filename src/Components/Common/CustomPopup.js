import React, { useState } from 'react';

const CustomPopup = ({ isPopupOpen, onClosePopup, children }) => {
  return (
    <>
      {isPopupOpen && (
        <div className="custom-popup-overlay">
          <div className="custom-popup-content">
            <a className="custom-close-button" onClick={onClosePopup}>
              <i className='icon-close'></i>
            </a>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default CustomPopup;