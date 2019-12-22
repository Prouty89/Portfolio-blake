import React, {useState} from "react";
import { useTrail, animated } from 'react-spring';
import Mountains from '../assets/Mountains.jpg';

import { LazyImageFull, ImageState } from 'react-lazy-images';





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
    <LazyImageFull className="bg-img" src={Mountains}>
        {({ imageProps, imageState, ref }) => (
        <img
            {...imageProps}
            ref={ref}
            src={
            imageState === ImageState.LoadSuccess
                ? imageProps.src
                : " "
            }
            style={{ opacity: ImageState.LoadSuccess ? "1" : "0.8" }}
        />
        )}
    </LazyImageFull>
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
    </div>
    )
}

export default Home;

