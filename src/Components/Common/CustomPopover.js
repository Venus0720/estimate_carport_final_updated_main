import React, { useState, useRef, useEffect } from 'react';

const CustomPopover = ({ ctacontent, content, position, trigger }) => {
  const [isVisible, setIsVisible] = useState(false);
  const popoverRef = useRef(null);

  const handleEnter = () => {
    setIsVisible(true);
  };

  const handleLeave = () => {
    setIsVisible(false);
  };

  const handleClick = (e) => {
    if (trigger === 'click') {
      e.stopPropagation();
    } else {
      setIsVisible(!isVisible);
    }
  };

  const handleClickOutside = (event) => {
    // Ensure the click isn't within the popover or on the button itself
    if (
      popoverRef.current &&
      !popoverRef.current.contains(event.target) &&
      event.target !== popoverRef.current.querySelector('button')
    ) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    
    if (trigger === 'click') {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      if (trigger === 'click') {
        document.removeEventListener('mousedown', handleClickOutside);
      }
    };
  }, [trigger]);

  return (
    <div
    className={`popover ${position}`}
    onMouseEnter={trigger === 'hover' ? handleEnter : undefined}
    onMouseLeave={trigger === 'hover' ? handleLeave : undefined}
    onClick={trigger !== 'hover' ? handleClick : undefined}
     
    >
     {ctacontent}
      {isVisible && (
        <div className="popover-content" ref={popoverRef}>
          {content}
        </div>
      )}
    </div> 
  );
};

export default CustomPopover;