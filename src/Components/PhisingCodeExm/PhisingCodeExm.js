import React, { useState } from 'react';

const PhisingCodeExm = () => {


    const [phpExampleCode, setPhpExampleCode] = useState('');
    const [showEditor, setShowEditor] = useState(false);
  
    const showPhpExample = () => {
      setPhpExampleCode(`
1.Create a Model

    ------  pip install scikit-learn----

import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.metrics import accuracy_score, classification_report
from sklearn.pipeline import make_pipeline

# Sample data (replace this with your actual dataset)
data = {
    'url': ['legitimate.com', 'phishing.com', 'secure-site.com', 'fake-login.com', 'trusted-site.com'],
    'label': [0, 1, 0, 1, 0]  # 0: Legitimate, 1: Phishing
}

df = pd.DataFrame(data)

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(df['url'], df['label'], test_size=0.2, random_state=42)

# Create a pipeline with a CountVectorizer and a Naive Bayes classifier
model = make_pipeline(CountVectorizer(), MultinomialNB())

# Train the model
model.fit(X_train, y_train)

# Make predictions on the test set
predictions = model.predict(X_test)

# Evaluate the model
accuracy = accuracy_score(y_test, predictions)
print(f"Accuracy: {accuracy:.2f}")

# Print classification report
print("Classification Report:")
print(classification_report(y_test, predictions))

# Example: Predict if a new URL is phishing
new_url = ['new-phishing-site.com']
new_prediction = model.predict(new_url)
print(f"Prediction for '{new_url[0]}': {'Phishing' if new_prediction[0] == 1 else 'Legitimate'}")

-----------------------------------------------------------

2.Create a Flask API (Python Backend):
pip install Flask

----------------------------------------------

3.Create a file named app.py

from flask import Flask, jsonify, request
import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.pipeline import make_pipeline

app = Flask(__name__)

# Sample data (replace this with your actual dataset)
data = {
    'url': ['legitimate.com', 'phishing.com', 'secure-site.com', 'fake-login.com', 'trusted-site.com'],
    'label': [0, 1, 0, 1, 0]  # 0: Legitimate, 1: Phishing
}

df = pd.DataFrame(data)

# Create a pipeline with a CountVectorizer and a Naive Bayes classifier
model = make_pipeline(CountVectorizer(), MultinomialNB())
model.fit(df['url'], df['label'])

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    url = data['url']
    prediction = model.predict([url])[0]
    return jsonify({'prediction': int(prediction)})

if __name__ == '__main__':
    app.run(debug=True)
    ---------------------------------------------

4.Make API Requests from React.js:

import React, { useState } from 'react';

const PhishingDetection = () => {
  const [url, setUrl] = useState('');
  const [prediction, setPrediction] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      const data = await response.json();
      setPrediction(data.prediction);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Phishing Detection Example</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Enter URL:
          <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
        </label>
        <button type="submit">Check for Phishing</button>
      </form>

      {prediction !== null && (
        <p>
          Prediction: {prediction === 1 ? 'Phishing' : 'Legitimate'}
        </p>
      )}
    </div>
  );
};

export default PhishingDetection;


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
        <div style={{padding:'15px',height:'250px',
        boxShadow:'10px 10px 15px 5px grey',marginTop:'35px'}}>
                        
              <ol className="card-text" style={{ textAlign: 'left', fontSize: '17px' }}>
                <li>
                  <span style={{ color: 'red' }}>1.</span> Educate users about phishing risks and best practices.
                </li>
                <hr />
                <li>
                  <span style={{ color: 'red' }}>2.</span> Implement email authentication protocols like SPF, DKIM, and DMARC.
                </li>
                <hr />
                <li>
                  <span style={{ color: 'red' }}>3.</span> Use secure and validated SSL certificates to ensure a secure connection.
                </li>
                <hr />
                <li>
                  <span style={{ color: 'red' }}>4.</span> Regularly update and patch web applications and server software.
                </li>
              </ol>
              <div style={{marginTop:'150px'}}>

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
                <button style={{marginLeft:'250px',width:'250px',height:'50px'}} className="btn btn-dark mt-3" onClick={showPhpExample}>
                  Show  Example
                </button>
              </div>
            </div>
          )}
              </div>
              <br />
              <br />
        </div>
    );
};

export default PhisingCodeExm;