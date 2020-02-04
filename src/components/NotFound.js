import React from 'react';
import BF from '../assets/NF.jpg'



function NotFound() {
    return (
      <div className="not-found">
        <img src={BF} alt="bigfoot"></img>
        <p>Whoops! This page could not be located</p>
      </div>
    );
  }

  export default NotFound;