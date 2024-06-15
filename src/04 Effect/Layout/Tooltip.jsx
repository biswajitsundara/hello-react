import React, { useRef, useState, useLayoutEffect } from 'react';
import './Tooltip.css'; // Import CSS for styling (if needed)

const Tooltip = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const tooltipRef = useRef(null);

  useLayoutEffect(() => {
    if (isVisible && tooltipRef.current && children && children.current) {
      const targetRect = children.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();

      // Calculate tooltip position relative to the target element
      const newPosition = {
        top: targetRect.bottom + 5,
        left: targetRect.left + (targetRect.width - tooltipRect.width) / 2,
      };

      // Apply styles for positioning
      tooltipRef.current.style.top = `${newPosition.top}px`;
      tooltipRef.current.style.left = `${newPosition.left}px`;
    }
  }, [isVisible, children]);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <div className="tooltip-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
      {isVisible && (
        <div className="tooltip" ref={tooltipRef}>
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
