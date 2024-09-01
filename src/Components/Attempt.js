import React, { useState, useEffect } from 'react';
import './Attempt.css';
import { RiArrowDropDownLine } from 'react-icons/ri';

const Attempts = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const accuracyOptions = ["1", "2", "3", "4"];

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.dropdown')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="dropdown-container">
      <label className="dropdown-label">Attempts</label>
      <div className="dropdown">
        <div className="dropdown-header" onClick={handleDropdownClick}>
          {selectedOption || 'Choose attempts'}
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

export default Attempts;
