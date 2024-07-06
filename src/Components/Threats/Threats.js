import React  from 'react';
import './Threats.css'
import Threatss from './Threatss';
import { cardDataArray } from '../FakeData';



const Threats = () => {
    const datsets= cardDataArray;


  
    return (
      <div className="container">
      <h2 className='heading'>Web Security Threats & Prevention Techniques</h2>
      <div className="row" style={{marginBottom:'40px'}}>
        {datsets.map((data, index) => (
          <div key={index} className="col-md-4">
            <Threatss data={data} />
          </div>
        ))}
      </div>
     
    </div>
    );
};

export default Threats;