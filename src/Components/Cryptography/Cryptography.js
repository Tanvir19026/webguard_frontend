import React, { useState } from 'react';

const Cryptography = () => {
  const [escapedString1, setEscapedString1] = useState('');
  const [escapedString2, setEscapedString2] = useState('');
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);

  const showExample1Handler = () => {
    setShowExample1(true);
    setEscapedString1(`const saltRounds = 10;
    const plaintextPassword = 'user_password';

    // Hash the password
    bcrypt.hash(plaintextPassword, saltRounds, (err, hash) => {
      if (err) throw err;
      console.log('Hashed Password:', hash);
    });

    // Compare password during login
    bcrypt.compare('user_input_password', hashFromDatabase, (err, result) => {
      if (err) throw err;
      console.log('Password Match:', result);
    });

   --------or--------

   -----Real Life Example-----

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    
    // Get data from the form
    $username = $_POST['username'];
    $password = $_POST['password'];
    
    
    // Insert data into the database
    
    // Hash the password
    $hashedPassword = password_hash($password, PASSWORD_BCRYPT);
    
    // Insert data into the database
    $sql = "INSERT INTO userList (username, password) VALUES ('$username', '$hashedPassword')";
    
    if ($conn->query($sql) === TRUE) {
        echo "<p>Data inserted successfully</p>";
       // echo "Hashed Password for $username: $hashedPassword <br>";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
    
    // Close connection
    $conn->close();
    ?>`);
  };

  const hideExample1Handler = () => {
    setShowExample1(false);
    setEscapedString1('');
  };

  const showExample2Handler = () => {
    setShowExample2(true);
    setEscapedString2(` const encryptionKey = 'supersecretkey';
    const sensitiveData = 'confidential information';

    // Encryption
    const encryptedData = encrypt(sensitiveData, encryptionKey);
    console.log('Encrypted Data:', encryptedData);

    // Decryption
    const decryptedData = decrypt(encryptedData, encryptionKey);
    console.log('Decrypted Data:', decryptedData);

    // Fictional encryption and decryption functions
    function encrypt(data, key) {
      // Implement secure encryption logic
      return 'encryptedData';
    }

    function decrypt(data, key) {
      // Implement secure decryption logic
      return 'decryptedData';
    }

          ----------or----------

          ------Real Life Example-----

          //index.html

          <!DOCTYPE html>
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Encryption Example</title>
          </head>
          <body>
              <form action="process.php" method="post">
                  <label for="username">Username:</label>
                  <input type="text" name="username" required>
                  <br>
                  <label for="mobile">Mobile Number:</label>
                  <input type="text" name="mobile" required>
                  <br>
                  <button type="submit">Submit</button>
              </form>
          </body>
          </html>
          
      //process.php

      <?php

// Include key generation and encryption functions
include 'encryption_functions.php';

// Check if form is submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
// Get form data
$username = $_POST['username'];
$mobile = $_POST['mobile'];

// Generate a secure key
$key = generateEncryptionKey();

// Encrypt data
$encryptedUsername = encryptData($username, $key);
$encryptedMobile = encryptData($mobile, $key);

// Save encrypted data to the database (assuming you have a database connection)
$conn = new mysqli("localhost", "username", "password", "example_db");

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO users (encrypted_username, encrypted_mobile) VALUES ('$encryptedUsername', '$encryptedMobile')";

if ($conn->query($sql) === TRUE) {
  echo "Data saved successfully!";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
}

?>


//retrieve.php

<?php

// Include key generation and encryption functions
include 'encryption_functions.php';

// Retrieve encrypted data from the database (assuming you have a database connection)
$conn = new mysqli("localhost", "username", "password", "example_db");

if ($conn->connect_error) {
die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT encrypted_username, encrypted_mobile FROM users";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
while ($row = $result->fetch_assoc()) {
  // Decrypt data
  $decryptedUsername = decryptData($row['encrypted_username']);
  $decryptedMobile = decryptData($row['encrypted_mobile']);

  // Display decrypted data
  echo "Username: " . $decryptedUsername . "<br>";
  echo "Mobile: " . $decryptedMobile . "<br>";
  echo "<hr>";
}
} else {
echo "No data found!";
}

$conn->close();

?>

//encryption_function.php

<?php

function generateEncryptionKey() {
return bin2hex(random_bytes(32)); // 32 bytes for a 256-bit key
}

function encryptData($data, $key) {
$cipher = 'aes-256-cbc';
$iv = openssl_random_pseudo_bytes(openssl_cipher_iv_length($cipher));
$encrypted = openssl_encrypt($data, $cipher, $key, 0, $iv);
return base64_encode($iv . $encrypted);
}

function decryptData($data, $key) {
$cipher = 'aes-256-cbc';
$data = base64_decode($data);
$ivSize = openssl_cipher_iv_length($cipher);
$iv = substr($data, 0, $ivSize);
$encrypted = substr($data, $ivSize);
return openssl_decrypt($encrypted, $cipher, $key, 0, $iv);
}

?>`);
  };

  const hideExample2Handler = () => {
    setShowExample2(false);
    setEscapedString2('');
  };

  const sectionStyle = {
    marginBottom: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const editorStyle = {
    backgroundColor: '#282c34',
    color: 'white',
    padding: '10px',
    fontSize:'20px',
    borderRadius: '5px',
    whiteSpace: 'pre-wrap',
    fontFamily: 'monospace',
    width: '80%', // Adjust the width as needed
    margin: '0 auto',
    textAlign: 'left', // Align text to the left
  };

  const copyButtonStyle = {
    marginTop: '10px',
  };

  return (
    <div className="card-text">
      <div style={sectionStyle}>
        <h2 className="mb-4 text-primary" style={{ textAlign: 'center', margin: '15px' }}>
          Cryptography in SQL Injection Prevention
        </h2>

        <div style={{ ...sectionStyle, ...editorStyle }}>
          <h3 style={{ color: 'cyan' }}>1. Hashing Passwords with bcrypt</h3>
          <h5>
            When storing passwords, use bcrypt for secure hashing. Bcrypt
            automatically handles salting, making it resistant to rainbow table
            attacks.
            <br />
            Example in PHP with password_hash and password_verify:
            <hr />
          </h5>

          {showExample1 ? (
            <>
              <pre style={{ ...editorStyle, textAlign: 'left', display: 'flex' }}>{escapedString1}</pre>
              <button className="btn btn-success" style={copyButtonStyle} onClick={() => copyToClipboard(escapedString1)}>
                Copy
              </button>
              <br />
              <button className="btn btn-primary" onClick={hideExample1Handler}>
                Hide Example 
              </button>
            </>
          ) : (
            <button className="btn btn-primary" onClick={showExample1Handler}>
              Show Example 
            </button>
          )}
        </div>

        <br />

        <div style={{ ...sectionStyle, ...editorStyle }}>
          <h3 style={{ color: 'cyan' }}>2. Encryption and Decryption Example</h3>
          <h5>
            Encrypt sensitive data before storing it in the database, and decrypt it when needed. Use a secure encryption library.
            <br />
            Example in PHP with OpenSSL:
          </h5>
          <hr />

          {showExample2 ? (
            <>
              <pre style={{ ...editorStyle, textAlign: 'left' }}>{escapedString2}</pre>
              <button className="btn btn-success" style={copyButtonStyle} onClick={() => copyToClipboard(escapedString2)}>
                Copy
              </button>
              <br />
              <button className="btn btn-primary" onClick={hideExample2Handler}>
                Hide Example 
              </button>
            </>
          ) : (
            <button className="btn btn-primary" onClick={showExample2Handler}>
              Show Example 
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const copyToClipboard = (text) => {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
  alert('Copied to clipboard!');
};

export default Cryptography;
