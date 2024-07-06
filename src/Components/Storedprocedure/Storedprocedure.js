// React component file
import React, { useState } from 'react';
import './Storedprocedure.css'
import { Button, Spinner } from 'react-bootstrap';


const Storedprocedure = () => {
  const [programCodes, setProgramCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');


  const handleSubmit = async () => {
    setLoading(true);

    // Save the entered code to the database
    try {
      const response = await fetch('https://webguard-server.onrender.com/stored-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ programCodes }),
      });
      const data = await response.json();
      setResponseMessage(data);
    } catch (error) {
      console.error('Error saving code:', error);
      setResponseMessage('Error saving code');
    }

    setLoading(false);
  };

  return (
    <div className='mt-5'>
     
   
        <div className="sql-injection-check-container mt-5">
        <h4 style={{color:'green'}}>Method 2</h4>
        <h4>Storedprocedure & Paramatarized Queries </h4>
        <div className="code-editor">
          <textarea
            placeholder="Enter your code"
            value={programCodes}
            onChange={(e) => setProgramCode(e.target.value)}
          />
        </div>
        <Button className="submit-button" onClick={handleSubmit} disabled={loading}>
          {loading ? (
            <>
              <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" />
              Saving...
            </>
          ) : (
            'submit for result'
          )}
        </Button>


        {responseMessage && (
        <div>
          <h3>{responseMessage.message}</h3>
          {responseMessage.suggestions && (
            <ul>
              {responseMessage.suggestions.map((suggestion, index) => (
                <li key={index}>{suggestion}</li>
              ))}
            </ul>
          )}
        </div>
      )}


       
      </div>

    </div>
  );
};

export default Storedprocedure;
