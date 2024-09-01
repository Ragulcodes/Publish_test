import React from 'react';
import './VisibilityToggle.css';

function VisibilityToggle() {
  return (
    <div className="visibility-container">
      <h6 className="visibility-title">Visibility</h6>
      <div className='toggle-container'>
      <div className="toggle-option">
        <label className="toggle-label">
          <input type="radio" name="visibility" value="public" />
          <span className="toggle-custom">
            <span className="toggle-radio"></span>
            <span className="toggle-text">
              <span className="toggle-title">Publicly visible</span>
              <span className="toggle-subtitle">Make it publicly visible to everyone in this portal</span>
            </span>
          </span>
        </label>
      </div>
      
      <div className="toggle-option">
         <label className="toggle-label">
          <input type="radio" name="visibility" value="private" checked />
          <span className="toggle-custom">
            <span className="toggle-radio"></span>
            <span className="toggle-text">
              <span className="toggle-title">Privately visible</span>
              <span className="toggle-subtitle">Make it visible to only you and the people you share with</span>
            </span>
          </span>
        </label>
      </div>
    </div>
    </div>
  );
}

export default VisibilityToggle;
