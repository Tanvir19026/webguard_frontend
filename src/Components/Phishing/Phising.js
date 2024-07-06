import React, { useState } from 'react';
import './Phishing.css'; // Import the CSS file for styling
import PhishingCodeExm from '../PhisingCodeExm/PhisingCodeExm';

const Phishing = () => {
  const [url, setUrl] = useState('');
  const [isPhishing, setIsPhishing] = useState(null);
  const [isEmptyInput, setIsEmptyInput] = useState(false);

  const checkForPhishing = (url) => {
    // Example checks
    const phishingKeywords = ['login', 'password', 'bank', 'secure'];

    // Check for HTTP
    const isHttpConnection = url.toLowerCase().startsWith('http://');

    // Check for phishing keywords
    const containsPhishingKeyword = phishingKeywords.some(keyword => url.toLowerCase().includes(keyword));

    // If the URL starts with 'http://' or contains phishing keywords with 'https://', flag it
    const isPhishing = isHttpConnection || (url.toLowerCase().startsWith('https://') && containsPhishingKeyword);

    setIsPhishing(isPhishing);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if the input is empty
    if (url.trim() === '') {
      setIsEmptyInput(true);
      setIsPhishing(null); // Reset the phishing status
      return;
    }

    setIsEmptyInput(false);
    // Check for phishing when the user submits the form
    checkForPhishing(url);
  };

  return (
    <div className="phishing-container">
      <h2>Phishing Detection Method</h2>

      <div className="phishing-card">
        <form onSubmit={handleSubmit}>
          <label>
            Enter URL:
            <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
          </label>
          <button className="button"type="submit">Check for Phishing</button>
        </form>

        {isEmptyInput && <p className="phishing-message phishing-warning">Please enter a URL before submitting.</p>}

        {isPhishing !== null && !isEmptyInput && (
          <div>
            {isPhishing ? (
              url.toLowerCase().startsWith('http://') ? (
                <p className="phishing-message phishing-danger">This URL may be associated with phishing. Proceed with caution.</p>
              ) : (
                <p className="phishing-message phishing-danger">Check the website carefully before login.</p>
              )
            ) : (
              <p className="phishing-message phishing-safe">This website seems safe. No action needed.</p>
            )}
          </div>
        )}
      </div>
    <div style={{margin:"25px"}}>
    <PhishingCodeExm ></PhishingCodeExm>
    </div>

    </div>
  );
};

export default Phishing;
