import React, { useState } from 'react';
import "./Description.css";

function Description({ nextRef }) {
  const [description, setDescription] = useState('');

  const handleInputChange = (e) => {
    setDescription(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      nextRef.current.focus(); // Move focus to the next component
    }
  };

  return (
    <div className="description-box">
      <label htmlFor="description">Description</label><br />
      <textarea
        id="description"
        value={description}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown} // Attach keydown handler
        placeholder="e.g Tell people what is quiz is all about"
      />
    </div>
  );
}

export default Description;
