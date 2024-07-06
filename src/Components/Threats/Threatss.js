import React from 'react';
import { Link } from 'react-router-dom';


const Threatss = ({data}) => {
   
    return (
        
         <div className="card"  style={{marginBottom:'30px'}}>
      <img className="card-image" src={data.image} alt={data.name} />
      <h4 style={{margin:'10px'}}>{data.name}</h4>
      <p >{data.text}</p>
        
        <Link  to={`/cards/${data.name}`}>
              <button className="awesome-button card-button">Explore</button>
            </Link>

        </div>
    );
  };
    
export default Threatss;