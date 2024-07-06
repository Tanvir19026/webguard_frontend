// XssPrevention.js
import React from 'react';

import './Xss.css';
import XssComponents from '../XssComponents/XssComponents';

const XssPrevention = () => {
  const preventionTechniques = [
    {
      order: '1',
      color: '#3498db',
      title: 'Input Validation',
      description: 'Validate and sanitize user input on both client and server sides.',
      codeExample: `
// Server-side input validation
const userInput = req.body.userInput;
if (/^[a-zA-Z0-9_]+$/.test(userInput)) {
  // Valid input
  // Proceed with the input
} else {
  // Invalid input, handle accordingly
  console.error('Invalid input format');
}
      `,
    },
    {
      order: '2',
      color: '#2ecc71',
      title: 'Output Encoding',
      description: 'Properly encode user input when rendering it in the UI to prevent script execution.',
      codeExample: `
// Output encoding in React
const userInput = "<script>alert('XSS')</script>";
const encodedInput = escape(userInput);
return <div>{encodedInput}</div>;
      `,
    },
    {
      order: '3',
      color: '#e74c3c',
      title: 'DOMPurify for Sanitization',
      description: 'Use DOMPurify library to sanitize user input and prevent malicious script execution.',
      codeExample: `
// Using DOMPurify for sanitization
import DOMPurify from 'dompurify';

const userInput = "<script>alert('XSS')</script>";
const sanitizedInput = DOMPurify.sanitize(userInput);
return <div dangerouslySetInnerHTML={{ __html: sanitizedInput }}></div>;
      `,
    },
    {
      order: '4',
      color: '#f39c12',
      title: 'Content Security Policy (CSP) (OPTIONAL)',
      description: 'Implement a strong CSP to restrict the sources from which scripts and styles can be loaded.',
      codeExample: `
// Setting up CSP headers on the server side (Express.js)
const express = require('express');
const helmet = require('helmet');

const app = express();
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", 'trusted-scripts.com'],
    styleSrc: ["'self'"],
  },
}));
      `,
    },
    {
        order: '5',
        color: '#9b59b6',
        title: 'HTTP Only and Secure Cookies (OPTIONAL)',
        description: 'Set cookies with the HttpOnly and Secure flags for added security.',
        codeExample: `
  // Setting an HTTP-only and secure cookie (Node.js and Express.js)
  const express = require('express');
  const cookieParser = require('cookie-parser');
  
  const app = express();
  app.use(cookieParser());
  
  app.get('/set-cookie', (req, res) => {
    res.cookie('sessionId', '123', { httpOnly: true, secure: true });
    res.send('Cookie set successfully');
  });
        `,
      },






    ];
  

  return (
    <div className="xss-prevention-container mt-5">

      <div className="xss-prevention-row ">
        {preventionTechniques.slice(0, 3).map((technique) => (
          <div key={technique.order} className="xss-prevention-card" style={{ borderColor: technique.color, width: '650px' }}>
            <h2>{`XSS Prevention Technique ${technique.order}`}</h2>
            <div className="xss-prevention-content">
              <p className="order" style={{ backgroundColor: technique.color }}>{technique.order}</p>
              <div>
                <h3 style={{color:'teal'}}>{technique.title}</h3>
                <p>{technique.description}</p>
                <pre style={{fontSize:'15px',fontWeight:'700'}}>
                  <code>{technique.codeExample}</code>
                </pre>
              </div>
            </div>
          </div>
        ))}
      </div>



      <div className="xss-prevention-row row">
       
        {preventionTechniques.slice(3).map((technique) => (
          <div key={technique.order} className="xss-prevention-card col-md-4" style={{ borderColor: technique.color, width: '620px',textAlign:'start' }}>
            <h2>{`XSS Prevention Technique ${technique.order}`}</h2>
            <div className="xss-prevention-content">
              <p className="order" style={{ backgroundColor: technique.color }}>{technique.order}</p>
              <div>
                <h3 style={{color:'teal'}}>{technique.title}</h3>
                <p>{technique.description}</p>
                <pre  style={{fontSize:'15px',fontWeight:'700'}}>
                  <code>{technique.codeExample}</code>
                </pre>
              </div>
            </div>
          </div>
        ))}
      </div>

      <XssComponents></XssComponents>
    </div>
  );
};

export default XssPrevention;
