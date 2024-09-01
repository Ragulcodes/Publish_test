import React, { useState, useRef, useEffect } from 'react';
import './Tags.css';
import tagimg from './assets/tagimg.svg';

function Tags({ inputRef }) {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const spanRef = useRef(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      e.preventDefault();
      setTags((prevTags) => [...prevTags, { id: Date.now(), text: inputValue.trim() }]);
      setInputValue('');
    }
  };

  useEffect(() => {
    const span = spanRef.current;
    const input = inputRef.current;

    if (span && input) {
      span.textContent = inputValue || input.placeholder;
      input.style.width = `${span.offsetWidth + 2}px`;
    }
  }, [inputValue, inputRef]);

  const removeTag = (idToRemove) => {
    setTags(tags.filter((tag) => tag.id !== idToRemove));
  };

  return (
    <div className="tags-input-container">
      <label htmlFor="tags" className="tags-label">Tag</label>
      <div className="tags-box">
        {tags.map((tag) => (
          <div key={tag.id} className="tag-item">
            <img src={tagimg} alt='tag' className="tag-img" />
            <span className="tag-text">{tag.text}</span>
            <button className="remove-tag-button" onClick={() => removeTag(tag.id)}>✕</button>
          </div>
        ))}
        <span ref={spanRef} className="hidden-measurer"></span>
        <input
          type="text"
          id="tags"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="+ Add a tag"
          className="tags-input"
          ref={inputRef}
        />
      </div>
    </div>
  );
}

export default Tags;
