import React, {useState} from "react";
import { useTrail, animated } from 'react-spring';
import Mountains from '../assets/Mountains.jpg';
import { StyledImage } from '../styles';
import { SimpleImg } from 'react-simple-img';
import { Resume } from '../assets/resume.pdf';
import Pdf from '../assets/resume.pdf';





const items = ["Hello! I'm Blake, a full stack developer", 'specializing in Javascript and Python', 'Take a look at my work and lets connect!']
const config = { mass: 30, tension: 1500, friction: 300 }


function Home(){
    const [toggle, set] = useState(true)
    const trail = useTrail(items.length, {
      config,
      opacity: toggle ? 1 : 0,
      y: toggle ? 0 : 90,
      height: toggle ? 30 : 0,
      from: { opacity: 0, x: 80, height: 600 },
      delay: 1700,
    })
    return(
    <div className="home-container">
            <StyledImage className="list">
                <SimpleImg className="bg-img" alt ="bg" animationDuration={1} src={Mountains} />
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
                    <a href={Pdf} target = "_blank" className ="cvres-btn">Resume</a>
                </div>
            </div>
      
    </div>
    )
}

export default Home;

