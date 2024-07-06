import React, { useState } from "react";
import "./DdosComponent.css"; // Import a CSS file for styling (create this file if it doesn't exist)

const DdosComponent = () => {
  const techniques = [
    {
      title: "Content Delivery Network (CDN)",
      description:
        "Distribute static assets across multiple servers using a CDN to handle traffic efficiently.",
      borderColor: "#3498db", // Unique border color for this technique
      // Brief Implementation Details
      implementation: `

 1. Choose a CDN provider (e.g., Cloudflare, Akamai).
 2. Configure CDN to cache and distribute static assets globally.
 3. Integrate CDN URLs into your React app for static assets.
 4. Test and monitor CDN performance.
      `,
    },
    {
      title: "Load Balancing",
      description:
        "Implement load balancing to distribute incoming requests evenly across multiple servers, preventing overload on a single server.",
      borderColor: "#2ecc71",
      // Brief Implementation Details
      implementation: `

 1. Choose a load balancing solution (e.g., NGINX, HAProxy).
 2. Configure load balancer to evenly distribute requests among backend servers.
 3. Add application servers to the load balancer pool.
 4. Test load balancing by sending requests and ensuring even distribution.
      `,
    },
    {
      title: "Rate Limiting",
      description:
        "Apply rate limiting on the server to control the number of requests from a single IP address within a specific time frame.",
      borderColor: "#e74c3c",
      // Brief Implementation Details
      implementation: `

 1. Choose a rate limiting library or middleware (e.g., express-rate-limit).
 2. Configure rate limits based on requests per IP address and time frame.
 3. Integrate rate limiting logic into your server code.
 4. Test and monitor application behavior with requests exceeding and within rate limits.
      `,
    },
   
    {
      title: "Cloud-Based DDoS Protection",
      description:
        "Leverage cloud-based DDoS protection services to filter out malicious traffic before it reaches the server.",
      borderColor: "#f39c12",
      // Brief Implementation Details
      implementation: `

 1. Choose a cloud-based DDoS protection service (e.g., Cloudflare, AWS Shield).
 2. Configure DNS to point to the DDoS protection provider's nameservers.
 3. Set up DDoS protection settings, including traffic filtering rules.
 4. Regularly monitor DDoS attack attempts and adjust protection settings.
      `,
    },
    {
      title: "Server-Side Security",
      description:
        "Regularly update and patch server software, implement network security best practices, and use firewalls and intrusion detection systems.",
      borderColor: "#9b59b6",

      implementation: `

 1. Regularly update and patch server operating system and software.
 2. Implement network security best practices (firewalls, secure communication protocols).
 3. Set up an Intrusion Detection System (IDS) to monitor network traffic.
 4. Conduct regular security audits and penetration testing.
      `,
    },
    {
      title: "Incident Response Plan",
      description:
        "Develop and maintain an incident response plan that outlines procedures for handling DDoS attacks, including communication and recovery processes.",
      borderColor: "#34495e",

      implementation: `
      
 1. Form an incident response team responsible for handling security incidents.
 2. Develop detailed procedures for detecting, responding to, and recovering from DDoS attacks.
 3. Train the incident response team and conduct regular drills.
 4. Keep the incident response plan well-documented and up-to-date.
      `,
    },

    {
      title: "MySQL DDoS Attack Prevention",
      Developer:'Developer Tips',
      description:
        "Implement measures to prevent DDoS attacks on a MySQL database server.",
      borderColor: "#16a085",
      // Brief Implementation Details
      implementation: `

 1. Use strong authentication mechanisms for MySQL (e.g., secure passwords).
 2. Implement IP whitelisting to allow only trusted connections.
 3. Monitor and log MySQL queries for unusual or malicious patterns.
 4. Consider using a database proxy or firewall to filter and control incoming traffic.
 5. Regularly update MySQL server software and apply security patches.
      `,
    },
    {
      title: "NoSQL DDoS Prevention",
      Developer:'Developer Tips',
      description:
        "Implement measures to prevent DDoS attacks on a NoSQL database server.",
      borderColor: "red",
      implementation: `
1. Use strong authentication mechanisms for your NoSQL database.
2. Implement IP whitelisting to allow only trusted connections.
3. Monitor and log database queries for unusual or malicious patterns.
4. Consider using a database proxy or firewall to filter and control incoming traffic.
5. Regularly update your NoSQL database software and apply security patches.
      `,
    },
  ];
  const [showHideExample, setShowHideExample] = useState(false);
  const [noSqlShow, setNoSqlShow] = useState(false);

  return (
    <div className="ddos-container mt-5">
      <h2 style={{ color: "orange" }}>DDoS Prevention Techniques</h2>
      <div className="ddos-cards mt-5">
        {techniques.map((technique, index) => (
          <div
            key={index}
            className="ddos-card"
            style={{ borderColor: technique.borderColor }}
          >
            
            <h3 style={{ color: "green",boxShadow:'5px  5px 5px orange',
          borderRadius:'5px',textAlign:'center',margin:'20px' }}>
            {technique.Developer}
            </h3>

          <h3 style={{ color: "#5B2C6F " }}>{technique.title}</h3>
            <p>{technique.description}</p>
            <div className="code-container">
              <pre style={{ color: "green", fontSize: "16px" }}>
                <code>
                  <span style={{ color: "blue" }}>Process:</span>
                  {technique.implementation}
                </code>
              </pre>
              
              


              {technique.title === "MySQL DDoS Attack Prevention" && (
                
                
                <>
               
                
                  <button onClick={() => setShowHideExample(!showHideExample)}>
                    {showHideExample ? "Hide Example" : "Show Example"}
                  </button>
                  {showHideExample && (
                    <>
                      <pre
                        style={{
                          color: "brown",
                          fontSize: "17px",
                          textAlign: "left",
                        }}
                      >
                        <code>
                          {`

const mysql = require('mysql');

// Create a MySQL connection pool
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'your-mysql-host',
  user: 'your-mysql-user',
  password: 'your-mysql-password',
  database: 'your-mysql-database',
});

// Use the pool to query the database
pool.query('SELECT * FROM your_table', (error, results) => {
  if (error) throw error;
  console.log('Query results:', results);
});

// Close the pool when done
pool.end();

-------Example--------
<?php
session_start();

// Rate limiting settings
$requestsLimit = 100; // Maximum number of requests allowed per time frame
$timeFrame = 60; // Time frame in seconds (e.g., 60 seconds)

// Get the client's IP address
$clientIP = $_SERVER['REMOTE_ADDR'];

// Generate a unique key for the client's IP address
$rateLimitKey = 'rate_limit_' . $clientIP;

// Check if the rate limit key exists in the session
if (!isset($_SESSION[$rateLimitKey])) {
    // If not, create the rate limit key and set the initial request count
    $_SESSION[$rateLimitKey] = 1;
} else {
    // If the key exists, increment the request count
    $_SESSION[$rateLimitKey]++;

    // Check if the request count exceeds the limit within the specified time frame
    if ($_SESSION[$rateLimitKey] > $requestsLimit) {
        // Log the exceeded request to the MySQL database
        $mysqli = new mysqli('your_mysql_host', 'your_mysql_user', 'your_mysql_password', 'your_mysql_database');
        $ipAddress = $mysqli->real_escape_string($clientIP);
        $requestCount = $mysqli->real_escape_string($_SESSION[$rateLimitKey]);

        $mysqli->query("INSERT INTO ddos_logs (ip_address, request_count) VALUES ('$ipAddress', '$requestCount')");

        $mysqli->close();

        http_response_code(429); // Return HTTP 429 (Too Many Requests) status code
        die('Rate limit exceeded. Please try again later.');
    }
}

// Your PHP application code goes here...

// Example MySQL connection and query
$mysqli = new mysqli('your_mysql_host', 'your_mysql_user', 'your_mysql_password', 'your_mysql_database');
$result = $mysqli->query("SELECT * FROM your_table");

// Process the query result or perform other application logic...

// Close the MySQL connection
$mysqli->close();

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP-MySQL Project</title>
</head>
<body>
    <h1>Welcome to PHP-MySQL Project</h1>
    <!-- Your HTML content goes here... -->
</body>
</html>



                          `}
                        </code>
                      </pre>

                      <button
                        className="bg-danger"
                        onClick={() => {
                          const code = `
                         
                          const mysql = require('mysql');
                          
                          // Create a MySQL connection pool
                          const pool = mysql.createPool({
                            connectionLimit: 10,
                            host: 'your-mysql-host',
                            user: 'your-mysql-user',
                            password: 'your-mysql-password',
                            database: 'your-mysql-database',
                          });
                          
                          // Use the pool to query the database
                          pool.query('SELECT * FROM your_table', (error, results) => {
                            if (error) throw error;
                            console.log('Query results:', results);
                          });
                          
                          // Close the pool when done
                          pool.end();
                          
                          -------Example--------
                          <?php
                          session_start();
                          
                          // Rate limiting settings
                          $requestsLimit = 100; // Maximum number of requests allowed per time frame
                          $timeFrame = 60; // Time frame in seconds (e.g., 60 seconds)
                          
                          // Get the client's IP address
                          $clientIP = $_SERVER['REMOTE_ADDR'];
                          
                          // Generate a unique key for the client's IP address
                          $rateLimitKey = 'rate_limit_' . $clientIP;
                          
                          // Check if the rate limit key exists in the session
                          if (!isset($_SESSION[$rateLimitKey])) {
                              // If not, create the rate limit key and set the initial request count
                              $_SESSION[$rateLimitKey] = 1;
                          } else {
                              // If the key exists, increment the request count
                              $_SESSION[$rateLimitKey]++;
                          
                              // Check if the request count exceeds the limit within the specified time frame
                              if ($_SESSION[$rateLimitKey] > $requestsLimit) {
                                  // Log the exceeded request to the MySQL database
                                  $mysqli = new mysqli('your_mysql_host', 'your_mysql_user', 'your_mysql_password', 'your_mysql_database');
                                  $ipAddress = $mysqli->real_escape_string($clientIP);
                                  $requestCount = $mysqli->real_escape_string($_SESSION[$rateLimitKey]);
                          
                                  $mysqli->query("INSERT INTO ddos_logs (ip_address, request_count) VALUES ('$ipAddress', '$requestCount')");
                          
                                  $mysqli->close();
                          
                                  http_response_code(429); // Return HTTP 429 (Too Many Requests) status code
                                  die('Rate limit exceeded. Please try again later.');
                              }
                          }
                          
                          // Your PHP application code goes here...
                          
                          // Example MySQL connection and query
                          $mysqli = new mysqli('your_mysql_host', 'your_mysql_user', 'your_mysql_password', 'your_mysql_database');
                          $result = $mysqli->query("SELECT * FROM your_table");
                          
                          // Process the query result or perform other application logic...
                          
                          // Close the MySQL connection
                          $mysqli->close();
                          
                          ?>
                          
                          <!DOCTYPE html>
                          <html lang="en">
                          <head>
                              <meta charset="UTF-8">
                              <meta name="viewport" content="width=device-width, initial-scale=1.0">
                              <title>PHP-MySQL Project</title>
                          </head>
                          <body>
                              <h1>Welcome to PHP-MySQL Project</h1>
                              <!-- Your HTML content goes here... -->
                          </body>
                          </html>
                          
                          `;
                          navigator.clipboard.writeText(code);
                          alert("Code copied to clipboard!");
                        }}
                      >
                        Copy Code
                      </button>
                    </>
                  )}
                </>
              )}   
              
              
        
              
               {technique.title === "NoSQL DDoS Prevention" && (
                <>
                  <button onClick={() => setNoSqlShow(!noSqlShow)}>
                    {noSqlShow ? "Hide Example" : "Show Example"}
                  </button>
                  {noSqlShow && (
                    <>
                      <pre
                        style={{
                          color: "brown",
                          fontSize: "17px",
                          textAlign: "left",
                        }}
                      >
                        <code>
                          {`

// server.js (Node.js / Express server)
const express = require('express');
const mongoose = require('mongoose');
const rateLimit = require('express-rate-limit');

const app = express();
const port = process.env.PORT || 3000;

// Rate limiting configuration
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per window
});

app.use(limiter);

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/yourdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// MongoDB schema and model
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
});

const User = mongoose.model('User', userSchema);

// Express route to fetch user data
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Start the Express server
app.listen(port, () => {
  console.log(Server is running on port );
});




                          `}
                        </code>
                      </pre>
         

                      <button
                        className="bg-danger"
                        onClick={() => {
                          const code = `
                         
                          // server.js (Node.js / Express server)
                          const express = require('express');
                          const mongoose = require('mongoose');
                          const rateLimit = require('express-rate-limit');
                          
                          const app = express();
                          const port = process.env.PORT || 3000;
                          
                          // Rate limiting configuration
                          const limiter = rateLimit({
                            windowMs: 15 * 60 * 1000, // 15 minutes
                            max: 100, // limit each IP to 100 requests per window
                          });
                          
                          app.use(limiter);
                          
                          // MongoDB connection
                          mongoose.connect('mongodb://localhost:27017/yourdb', {
                            useNewUrlParser: true,
                            useUnifiedTopology: true,
                          });
                          
                          // MongoDB schema and model
                          const userSchema = new mongoose.Schema({
                            username: String,
                            email: String,
                          });
                          
                          const User = mongoose.model('User', userSchema);
                          
                          // Express route to fetch user data
                          app.get('/api/users', async (req, res) => {
                            try {
                              const users = await User.find();
                              res.json(users);
                            } catch (error) {
                              console.error(error);
                              res.status(500).send('Internal Server Error');
                            }
                          });
                          
                          // Start the Express server
                          app.listen(port, () => {
                            console.log(Server is running on port $(port);
                          });
                          
                          
                          `;
                          navigator.clipboard.writeText(code);
                          alert("Code copied to clipboard!");
                        }}
                      >
                        Copy Code
                      </button>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        ))}
      </div>
     
    </div>
  );
};

export default DdosComponent;
