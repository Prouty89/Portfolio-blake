import React from "react";

import { StyledHome } from '../styles';
import Animated from './Animated';
import Stack from './AnimatedStack';
import Touch from '../assets/Handsss.png';

function Home() {
  return (
    <>
    <StyledHome>
        <Stack />
      <div className="home-contents">
        <div className="welcome-container">
          {/* <div className="hand-container">
            <div className="hand-sizer">
          <img className="hands-img" src={Touch} alt="hands" />
          </div>
          </div> */}
          <Animated />
        </div>
      </div>
      
    </StyledHome>
    </>
  );
}

export default Home;