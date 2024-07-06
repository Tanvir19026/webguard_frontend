// XssComponents.js
import React, { useState } from 'react';
import DOMPurify from 'dompurify';
import './XssComponents.css';

const detectXss = (input) => {
  // Check for potential XSS using a regular expression
  const hasPotentialXSS = /<\s*script[^>]*>.*?<\/\s*script\s*>|<\s*(?:[\w-]+\s*=\s*".*?"\s*|\/?[\w-]+\/?)\s*>/i.test(input);

  let sanitizedInput;
  let isXssDetected = false;

  if (hasPotentialXSS) {
    // If potential XSS is detected, sanitize the input with DOMPurify
    sanitizedInput = DOMPurify.sanitize(input);
    isXssDetected = true;
  } else {
    // If not detected, use the original input
    sanitizedInput = input;
  }

  return { input, sanitizedInput, isXssDetected };
};

const XssComponents = () => {
  const [inputValue, setInputValue] = useState('');
  const [commentValue, setCommentValue] = useState('');
  const [searchValue, setSearchValue] = useState('');

  const [isInputXssDetected, setIsInputXssDetected] = useState(false);
  const [isCommentXssDetected, setIsCommentXssDetected] = useState(false);
  const [isSearchXssDetected, setIsSearchXssDetected] = useState(false);

  const handleInputChange = (e) => {
    const { value } = e.target;
    const { input,  isXssDetected } = detectXss(value);
    setInputValue(input);
    setIsInputXssDetected(isXssDetected);
  };

  const handleCommentChange = (e) => {
    const { value } = e.target;
    const { input, isXssDetected } = detectXss(value);
    setCommentValue(input);
    setIsCommentXssDetected(isXssDetected);
  };

  const handleSearchChange = (e) => {
    const { value } = e.target;
    const { input,isXssDetected } = detectXss(value);
    setSearchValue(input);
    setIsSearchXssDetected(isXssDetected);
  };

  return (
    <div className="xss-container mt-5 mb-5" 
    style={{border:'2px dotted Navy',borderRadius:'5px'}}>
        <h3 style={{margin:'25px',color:'Purple'}}>Example of Detection Cross-Site-Scripting/XSS  <hr /></h3>
       
      <div className="xss-input">
     
        <label htmlFor="input">Input Form:</label>
        <input
          type="text"
          id="input"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={() => alert(`Detected: ${inputValue}\nSanitized: ${DOMPurify.sanitize(inputValue)}`)}>
          Show Values
        </button>
        {isInputXssDetected && <p className="xss-warning">Potential XSS detected! Input sanitized.</p>}
      </div>
      <div className="xss-textarea">
        <label htmlFor="comment">Comment Box:</label>
        <textarea
          id="comment"
          value={commentValue}
          onChange={handleCommentChange}
        />
        <br />
        <button onClick={() => alert(`Detected: ${commentValue}\nSanitized: ${DOMPurify.sanitize(commentValue)}`)}>
          Show Values
        </button>
        {isCommentXssDetected && <p className="xss-warning">Potential XSS detected! Input sanitized.</p>}
      </div>
      <div className="xss-input">
        <label htmlFor="search">Search Box:</label>
        <input
          type="text"
          id="search"
          value={searchValue}
          onChange={handleSearchChange}
        />
        <button onClick={() => alert(`Detected: ${searchValue}\nSanitized: ${DOMPurify.sanitize(searchValue)}`)}>
          Show Values
        </button>
        {isSearchXssDetected && <p className="xss-warning">Potential XSS detected! Input sanitized.</p>}
      </div>
    </div>
  );
};

export default XssComponents;
