import React, { useState } from 'react';

const NoCookie = () => {
  const [phpExampleCode, setPhpExampleCode] = useState('');
  const [showEditor, setShowEditor] = useState(false);

  const showPhpExample = () => {
    setPhpExampleCode(`
    
    // Install the necessary packages
    // npm install express express-session mongoose connect-mongo bcrypt jsonwebtoken helmet
    
    const express = require('express');
    const session = require('express-session');
    const mongoose = require('mongoose');
    const MongoStore = require('connect-mongo')(session);
    const bcrypt = require('bcrypt');
    const jwt = require('jsonwebtoken');
    const helmet = require('helmet');
    
    const app = express();
    
    // Enable Helmet for additional security headers
    app.use(helmet());

    // Connect to MongoDB
mongoose.connect('mongodb://localhost/sessionStore', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Set up express-session
app.use(
  session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    cookie: {
      secure: true,
      httpOnly: true,
      maxAge: 3600000, // 1 hour session timeout
    },
  })
);

// Middleware to check if the request is secure (HTTPS)
const ensureSecure = (req, res, next) => {
  if (req.secure) {
    return next();
  }
  res.redirect(url);
};

app.use(ensureSecure);

// Sample user model (replace with your actual user model)
const User = mongoose.model('User', {
  username: String,
  password: String,
});

// Register a new user
app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  // Hash the password before storing it
  const hashedPassword = await bcrypt.hash(password, 10);

  // Store the user in MongoDB
  const newUser = new User({ username, password: hashedPassword });
  await newUser.save();

  res.send('User registered successfully');
});

// Login and generate a JWT token
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Fetch user details from MongoDB
  const user = await User.findOne({ username });

  if (!user) {
    return res.status(401).send('Invalid credentials');
  }

  // Compare the provided password with the hashed password
  const passwordMatch = await bcrypt.compare(password, user.password);

  if (passwordMatch) {
    // Generate a JWT token
    const token = jwt.sign({ username: user.username }, 'your-jwt-secret', { expiresIn: '1h' });

    // Set the token in the session
    req.session.token = token;

    res.send('Login successful');
  } else {
    res.status(401).send('Invalid credentials');
  }
});

// Protected route using JWT for authentication
app.get('/protected-resource', (req, res) => {
  const token = req.session.token;

  if (!token) {
    return res.status(401).send('Unauthorized');
  }

  // Verify the JWT token
  jwt.verify(token, 'your-jwt-secret', (err, decoded) => {
    if (err) {
      return res.status(401).send('Invalid token');
    }

    // Access the protected resource
    res.send(Welcome, $username! This is a protected resource.);
  });
});

// Logout and destroy the session
app.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
    }
    res.redirect('/');
  });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(Server running on http://localhost:yourPort);
});

    
    `);
    setShowEditor(true); // Show the code editor after clicking the button
  };

  const hidePhpExample = () => {
    setPhpExampleCode('');
    setShowEditor(false);
  };

  const copyToClipboard = () => {
    const textarea = document.createElement('textarea');
    textarea.value = phpExampleCode;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Copied to clipboard!');
  };

  return (
    <div className="container mt-5" style={{marginBottom:'30px'}}>
      <div className="row justify-content-center">
        <div className="col-md-12">
        
          {showEditor && (
            <div className="row">
              <div className="col-md-12 mt-5">
                <textarea
                  className="form-control"
                  rows="20"
                  readOnly
                  value={phpExampleCode}
                  style={{ fontFamily: 'monospace', backgroundColor: '#f8f9fa', color: 'darkblue' }}
                ></textarea>
              </div>
              <div className="col-md-12 mt-3 text-center">
                <button className="btn btn-success mx-2" onClick={copyToClipboard}>
                  Copy
                </button>
                <button className="btn btn-danger mx-2" onClick={hidePhpExample}>
                  Hide Example
                </button>
              </div>
            </div>
          )}
          {!showEditor && (
            <div className="row" >
              <div className="col-md-12 " >
                <button style={{marginLeft:'540px',width:'250px',background:'green'}} className="btn btn-primary mt-3" onClick={showPhpExample}>
                  Show NOSQL Example
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NoCookie;
