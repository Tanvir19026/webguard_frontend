// React component file
import React, { useState } from 'react';
import './SqlInjection.css';
import { Button, Spinner } from 'react-bootstrap';
import LibraryUses from '../LibraryUses/LibraryUses';
import { Link } from 'react-router-dom';

const SqlInjection = () => {
  const [programCode, setProgramCode] = useState('');
 
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async () => {
    setLoading(true);
   
 
    // Save the entered code to the database
    try {
      const response = await fetch('https://webguard-server.onrender.com/save-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ programCode }),
      });
      const data = await response.json();
      setResponseMessage(data.message);
    } catch (error) {
      console.error('Error saving code:', error);
      setResponseMessage('Error saving code');
     
    }

    setLoading(false);
  };

  return (
    <div className='mt-5'>
      <h3 style={{textAlign:'center',color:'Gray'}}>Methods for prevent SQL injection </h3>
       <div className='d-flex'style={{width:'400px',margin:'0 auto',color:'green'}}>
       
       <Link to='/storedprocedure'><h3 style={{padding:'25px'}}>Method 2 </h3></Link>
       <Link to='/cryptography'><h3 style={{padding:'25px'}}>Method 3 </h3></Link>
       </div>
        <div className="sql-injection-check-container mt-5">
        <h4 style={{color:'green'}}>Method 1</h4>
        <h2>Input Sanitization / Validation </h2>
        <div className="code-editor">
          <textarea
            placeholder="Enter input"
            value={programCode}
            
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
          <div className="result">
            <p style={{color:'red'}}>{responseMessage}</p>
             
          </div>
        )}
      </div>
      <LibraryUses></LibraryUses>
      
    </div>
  );
};

export default SqlInjection;
