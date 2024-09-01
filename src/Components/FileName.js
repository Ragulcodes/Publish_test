import React, { useState } from 'react';
import './FileName.css';

function FileName({ nextRef }) {
  const [fileName, setFileName] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setFileName(value);
    if (!value) {
      setError('Filename cannot be empty');
    } else {
      setError('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (fileName.trim() === '') {
        setError('Filename cannot be empty');
      } else {
        setError('');
        if (nextRef && nextRef.current) { // Check if nextRef and nextRef.current are defined
          nextRef.current.focus(); // Move focus to the next component
        }
      }
    }
  };

  return (
    <div className="file-name-input">
      <label htmlFor="file-name">Quiz Name</label>
      <input
        type="text"
        id="file-name"
        value={fileName}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="e.g user1234@gmail.com"
        className={error ? 'input-error' : ''}
        required
      />
      {error && <p className="error-message"> ⚠ {error}</p>}
    </div>
  );
}

export default FileName;
