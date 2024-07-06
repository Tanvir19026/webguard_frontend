import React, { useState } from 'react';
import NoCookie from '../Cryptography/NosqlHijackingCookie/NoCookie';

const Hijack = () => {
  const [phpExampleCode, setPhpExampleCode] = useState('');
  const [showEditor, setShowEditor] = useState(false);

  const showPhpExample = () => {
    setPhpExampleCode(`
    <?php
    session_start();
    
    // Check if libsodium is available
    if (!extension_loaded('libsodium')) {
        die('libsodium extension not available.');
    }
    
    // Function to generate a secure session ID
    function generate_secure_session_id() {
        return bin2hex(random_bytes(32)); // 32 bytes of random data
    }
    
    // Function to regenerate session ID and destroy the old session
    function regenerate_session_id() {
        session_regenerate_id(true);
    }
    
    // Check if the user is logged in
    function is_user_logged_in() {
        return isset($_SESSION['user_id']);
    }
    
    // Function to set user authentication with encrypted data using libsodium
    function set_user_authentication($user_id) {
        $nonce = random_bytes(SODIUM_CRYPTO_SECRETBOX_NONCEBYTES);
        $encryptedUserId = sodium_crypto_secretbox($user_id, $nonce, $_SESSION['session_key']);
    
        $_SESSION['user_id'] = base64_encode($nonce . $encryptedUserId);
    }
    
    // Check for a valid session and regenerate session ID periodically for added security
    function validate_session() {
        if (!isset($_SESSION['user_id']) || (time() - $_SESSION['last_activity'] > 1800)) {
            // If the user is not logged in or session is older than 30 minutes (1800 seconds)
            session_unset();
            session_destroy();
            session_start();
            header("Location: login.php"); // Redirect to login page if session is not valid
            exit();
        }
    
        // Update last activity time
        $_SESSION['last_activity'] = time();
    }
    
    // Initialize session or resume existing session
    if (!isset($_SESSION['last_activity'])) {
        $_SESSION['last_activity'] = time();
    }
    
    // Regenerate session ID periodically with 5% probability
    if (rand(1, 100) <= 5) {
        regenerate_session_id();
    }
    
    // Check if the user is logged in
    if (!is_user_logged_in()) {
        header("Location: login.php"); // Redirect to login page if not logged in
        exit();
    }
    
    // Validate the session
    validate_session();
    ?>
    
    <!-- The rest of your HTML content goes here -->
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
    <div className="container mt-5" style={{height:'1300px'}}>
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="card mb-4" style={{ width: '900px', height: '500px', margin: '0 auto' }}>
          <h4 className="card-title text-center mb-4 text-primary">Cookie & Session Hijacking Prevention Techniques</h4>
          <hr style={{color:'red'}}/>
            <div className="card-body" style={{ width: '850px' }}>
              <h5 className="card-title text-center mb-4">Key Points</h5>
              <ol className="card-text" style={{ textAlign: 'left', fontSize: '15px' }}>
                <li>
                  <span style={{ color: 'red' }}>1.</span>Generate secure session IDs using{' '}
                  <code>bin2hex(random_bytes(32))</code>.
                </li>
                <hr />
                <li>
                  <span style={{ color: 'red' }}>2.</span>Regenerate session ID periodically with{' '}
                  <code>session_regenerate_id(true)</code>.
                </li>
                <hr />
                <li>
                  <span style={{ color: 'red' }}>3.</span>Encrypt sensitive session data before storing it.
                </li>
                <p>
                  Before setting the user_id in the session, we encrypt it using <code>libsodium</code> etc.
                </p>
                <hr />
                <li>
                  <span style={{ color: 'red' }}>4.</span>Implement session timeout to invalidate inactive sessions.
                </li>
                <hr />
                <li>
                  <span style={{ color: 'red' }}>5.</span>Always use HTTPS to encrypt data in transit for better
                  security.
                </li>
                <hr />
              </ol>
            </div>
          </div>
          {showEditor && (
            <div className="row">
              <div className="col-md-12 mt-5">
                <textarea
                  className="form-control"
                  rows="20"
                  readOnly
                  value={phpExampleCode}
                  style={{ fontFamily: 'monospace', backgroundColor: '#f8f9fa', color: 'blue' }}
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
            <div className="row">
              <div className="col-md-12 " >
                <button style={{marginLeft:'550px',width:'250px'}} className="btn btn-primary mt-3" onClick={showPhpExample}>
                  Show PHP Example
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <NoCookie></NoCookie>
    </div>
  );
};

export default Hijack;
