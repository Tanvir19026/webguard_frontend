import React, { useState } from 'react';

const LibraryUses = () => {
  const [escapedString, setEscapedString] = useState('');

  const showExample = () => {
    setEscapedString(`
    <span style="color : green;">$enteredUsername</span>  = <span style="color:OrangeRed">$_POST</span>['username'];
    <span style="color : green;">$enteredPassword</span> = <span style="color:OrangeRed">$_POST</span>['password'];
    

    <span style="color : green;">$enteredUsername</span>=<span style="color: red;">stripcslashes</span>(<span style="color : green;">$enteredUsername</span>);
    <span style="color : green;">$enteredPassword</span>=<span style="color: red;">stripcslashes</span>(<span style="color : green;">$enteredPassword</span>);

    <span style="color : green;">$enteredUsername</span>=<span style="color: blue;">mysqli_real_escape_string</span>($conn, <span style="color : green;">$enteredUsername</span>);
    <span style="color : green;">$enteredPassword</span>=<span style="color: blue;">mysqli_real_escape_string</span>($conn, <span style="color : green;">$enteredPassword</span>);
    `);
  };

  return (
    <div className="card mt-5" style={{ width: '600px', height: '500px', margin: '0 auto' }}>
      <div className="card-body">
        <h5 className="card-title">Library Uses Example</h5>
        <hr />
        <h6 className="card-title text-danger">Use stripcslashes() & mysqli_real_escape_string()</h6>
        <br />
        <button className="btn btn-primary" onClick={showExample}>
          Show Example
        </button>
        <div className="mt-3">
          <pre dangerouslySetInnerHTML={{ __html: escapedString }} />
        </div>
      </div>
    </div>
  );
};

export default LibraryUses;
