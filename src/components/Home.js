import React, {useState} from "react";
import { useTrail, animated } from 'react-spring';
import Blake from '../assets/BlakeRsz.jpg';






const items = ["Ardent, Sincere Programmer", 'Blake Prouty seeks work', 'in JavaScript or Python']
const config = { mass: 140, tension: 2000, friction: 800 }


function Home() {
  const [toggle, set] = useState(true);
  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0.2,
    y: toggle ? 0 : 30,
    height: toggle ? 30 : 0,
    from: { opacity: 0, x: 80, height: 600 },
    delay: 1000
  });
  return (
    <div className="home-wrap">
      <div className="home-container">
        <div className="trails-main" onFocus={() => set(state => !state)}>
          {trail.map(({ x, height, ...rest }, index) => (
            <animated.div
              className="font"
              key={items[index]}
              className="trails-text"
              style={{
                ...rest,
                transform: x.interpolate(x => `translate3d(0,${x}px,0)`)
              }}
            >
              <animated.div style={{ height }}>{items[index]}</animated.div>
            </animated.div>
          ))}
        </div>
        <div className="photo-container">
          <div className="photo-square">
            <img className="blake-photo" src={Blake} alt="profpho" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

