import React, {useState} from "react";
import { useTrail, animated } from 'react-spring';


const items = ["Hello! I'm Blake, a full stack web developer", 'specialized in HTML, CSS, and Javascript.', 'Take a look at my work and lets connect!']
const config = { mass: 30, tension: 1500, friction: 200 }


function Home(){
    const [toggle, set] = useState(true)
    const trail = useTrail(items.length, {
      config,
      opacity: toggle ? 1 : 0,
      y: toggle ? 0 : 80,
      height: toggle ? 60 : 0,
      from: { opacity: 0, x: 80, height: 10 },
    })
    return(
    <div className="home-container">
        <div className="trails-main" onFocus={() => set(state => !state)}>
            {trail.map(({ x, height, ...rest }, index) => (
                <animated.div
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
        <p className="img-title">Crater Lake 10-07-2017</p> 
    </div>
    )
}

export default Home;

