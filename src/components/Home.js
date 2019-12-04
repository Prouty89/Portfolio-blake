import React, {useState} from "react";
import { useTrail, animated } from 'react-spring';
import Head from '../assets/Head.jpg';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';


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
    })
    return(
    <div className="home-container">
        <LazyLoad>
        <p className="img-title">Crater Lake 10-07-2017</p>
            <StyledImage className="list">
                <img className="bg-img" alt ="bg" src={Head} />
            </StyledImage>
        </LazyLoad>
        <LazyLoad offset={100}>
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
        </LazyLoad> 
    </div>
    )
}

export default Home;


const StyledImage = styled.div`
    .bg-img{
        height: -webkit-fill-available;
        position: fixed;
        top: 0;
        z-index: -1;
        display: flex;
    }
`

