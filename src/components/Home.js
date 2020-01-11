import React, {useState} from "react";
import { useTrail, animated } from 'react-spring';
import Palm from '../assets/Palm.jpg';
import Github from '../assets/Github.svg';
import Tweet from '../assets/Tweet.svg';
import IG from '../assets/IG.svg';
import Linkd from '../assets/Linkd.svg';
import SVG from 'react-inlinesvg';
import Blake from '../assets/BlakeP.jpg';


import { LazyImageFull, ImageState } from 'react-lazy-images';





const items = ["Hello! I'm Blake, a full stack developer", 'working primarily in Javascript and Python', 'Take a look at my work and lets connect!']
const config = { mass: 140, tension: 2000, friction: 800 }


function Home(){
    const [toggle, set] = useState(true)
    const trail = useTrail(items.length, {
      config,
      opacity: toggle ? .9 : .3,
      y: toggle ? 0 : 30,
      height: toggle ? 30 : 0,
      from: { opacity: 0, x: 80, height: 600 },
      delay: 1300,
    })
    return(
        <div className = "home-wrap">
        <LazyImageFull className="bg-img" src={Palm} alt = "headimg">
        {({ imageProps, imageState, ref }) => (
        <img
            {...imageProps}
            ref={ref}
            src={
            imageState === ImageState.LoadSuccess
                ? imageProps.src
                : " "
            }
            style={{ opacity: ImageState.LoadSuccess ? ".9" : "0" }}
        />
        )}
    </LazyImageFull>
    <div className="home-container">
        <div className ="social-tray">
            <div className="social-icons">
                <SVG rel = "noopener" className="svg" src = {IG}/>
                <SVG rel = "noopener" className="svg" src = {Github}/>
                <SVG rel = "noopener" className="svg" src = {Tweet}/>
                <SVG rel = "noopener" className="svg" src = {Linkd}/>
            </div>
        </div>
            <div className="trails-main" onFocus={() => set(state => !state)}>
                {trail.map(({ x, height, ...rest }, index) => (
                    <animated.div className="font"
                        key={items[index]}
                        className="trails-text"
                        style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
                        <animated.div style={{ height }}>{items[index]}</animated.div>
                    </animated.div>
                ))}
            </div>
            <div className ="photo-container">
            <img className ="blake-photo" src={Blake} alt = "profpho"/>
            </div>
    </div>
    </div>
    )
}

export default Home;

