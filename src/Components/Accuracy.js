import React, { useState, useEffect, useRef } from 'react';
import './Accuracy.css';
import { RiArrowDropDownLine } from 'react-icons/ri';

const Accuracy = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const dropdownRef = useRef(null);

  const accuracyOptions = ['50%', '60%', '70%', '80%', '90%', '100%'];

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  // Handle clicks outside of the dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown-container" ref={dropdownRef}>
      <label className="dropdown-label">Accuracy Level</label>
      <div className="dropdown">
        <div className="dropdown-header" onClick={handleDropdownClick}>
          {selectedOption || 'Choose accuracy level'}
          <RiArrowDropDownLine className={`dropdown-icon ${isOpen ? 'open' : ''}`} />
        </div>
        {isOpen && (
          <ul className="dropdown-list">
            {accuracyOptions.map((option, index) => (
              <li
                key={index}
                className="dropdown-list-item"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Accuracy;
