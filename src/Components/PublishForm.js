import React, { useRef } from 'react';
import FileName from './FileName.js';
import Description from './Description.js';
import Tags from './Tags.js';
import Accuracy from './Accuracy.js';
import Attempt from './Attempt.js';
import "./PublishForm.css";
import FormButtons from './FormButtons.js';
import VisibilityToggle from './VisibilityToggle.js';
import info_img from './assets/info_img.svg';

function PublishForm() {
  const descriptionRef = useRef(null); // Reference for description input
  const tagsRef = useRef(null);        // Reference for tags input

  return (
    <div className='main_container'>
      <form className="form-container">
        <div className='Info-bar'>
          <img className='form_logo' src={info_img} alt='img' />
          <div className='info'>         
            <h1 className='main-text'>Great, you’re almost done!</h1>
            <h4 className='sub-text'>Review quiz settings and you’re good to go</h4>
          </div>
        </div>
        {/* Passing the ref to FileName component */}
        <FileName nextRef={descriptionRef} />
        {/* Passing the ref to Description component */}
        <Description nextRef={tagsRef} />
        {/* Passing the ref to Tags component */}
        <Tags inputRef={tagsRef} />
        <div className='accuracy_attempt_container'>
          <Accuracy />
          <Attempt />
        </div>
        <VisibilityToggle />
        <FormButtons />
      </form>
    </div>
  );
}

export default PublishForm;
