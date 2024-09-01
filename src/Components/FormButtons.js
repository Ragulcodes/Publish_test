import React from 'react';
import './FormButtons.css';

function FormButtons({ onCancel, onSubmit }) {
  return (
    <div className="button-container">
      <button className="cancel-button" onClick={onCancel}>
        Cancel
      </button>
      <button className="submit-button" onClick={onSubmit}>
        Publish
      </button>
    </div>
  );
}

export default FormButtons;
