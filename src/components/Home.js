import React, {useState} from "react";
import { useTrail, animated } from 'react-spring';
import Head from '../assets/Head.jpg';
import styled from 'styled-components';
import { SimpleImg } from 'react-simple-img';




const items = ["Hello! I'm Blake, a full stack web developer", 'specialized in HTML, CSS, and Javascript.', 'Take a look at my work and lets connect!']
const config = { mass: 30, tension: 1500, friction: 200 }


function Home(){
    const [toggle, set] = useState(true)
    const trail = useTrail(items.length, {
      config,
      opacity: toggle ? 1 : 0,
      y: toggle ? 0 : 90,
      height: toggle ? 30 : 0,
      from: { opacity: 0, x: 80, height: 10 },
      delay: 1500,
    })
    return(
    <div className="home-container">
        <p className="img-title">Crater Lake 10-07-2017</p>
            <StyledImage className="list">
                <SimpleImg className="bg-img" alt ="bg" height={1000} animationDuration={1.5} disableAnimationAferCache={true} src={Head} />
            </StyledImage>
            <div className="trails-main" onFocus={() => set(state => !state)}>
                {trail.map(({ x, height, ...rest }, index) => (
                    <animated.div className="font"
                        key={items[index]}
                        className="trails-text"
                        style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
                        <animated.div style={{ height }}>{items[index]}</animated.div>
                    </animated.div>
                ))}
                <div className="cv-res">
                    <button className ="cvres-btn">Resume</button>
                </div>
            </div>
      
    </div>
    )
}

export default Home;


const StyledImage = styled.div`
    .bg-img{
        height: -webkit-fill-available;
        position: fixed !important;
        top: 0;
        z-index: -1;
        display: flex;
    }
`

