import React from 'react';
import FoggyBackground from './FoggyBackground.js';

function Homepage() {
  return (
    <div className="Landing">
      <FoggyBackground/>
      <div className="homepage">
        <div className="title_container">
          <p className='title'>Anthony De Rada</p>
          <p className='subtitle'>Creator</p>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
