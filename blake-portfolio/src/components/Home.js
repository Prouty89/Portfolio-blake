import React, {useState} from "react";
import SVG from "react-inlinesvg/lib/index";
import Trees from '../assets/Trees.svg';
import { useTrail, animated } from 'react-spring';


const items = ["Hello! I'm Blake,", 'a full stack developer', 'specialized in HTML, CSS, and Javascript,', 'take a look at my work and lets connect!']
const config = { mass: 30, tension: 1500, friction: 200 }


function Home(){
    const [toggle, set] = useState(true)
    const trail = useTrail(items.length, {
      config,
      opacity: toggle ? 1 : 0,
      y: toggle ? 0 : 100,
      height: toggle ? 50 : 0,
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
        </div>
        <div className="cv-res">
           <button className ="cvres-btn">Resume</button>
        </div>
        <SVG className="trees" src= {Trees}/>
    </div>
    )
}

export default Home;

