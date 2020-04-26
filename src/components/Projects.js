import React, { useState } from 'react';
import { useTransition } from 'react-spring';

import { StyledProjects } from '../styles';


import Styled from 'styled-components';

import { 
  One,
  Two,
  Three,
  Four,
  Five,
  Six
} from './ProjectData';

const StyledButton = Styled.div `
display: flex;
align-items: center;


.empty{
  width: 30px;
}

.modal-active{
  font-family: 'Josefin Slab', serif;
  border: none;
  font-weight: bold;
  color: #536273;
  background: transparent;
  font-size: 1.6em;
  list-style: disc;
  display: flex;
  
  align-items: center;
  cursor: pointer;
  justify-content: flex-end;
  outline: none;
  user-select: none;
  height: 50px;
  padding: 1px 6px;
  text-decoration: none;

  @media(max-width: 1000px){
    font-size: 1.6rem;
  }

  @media(max-width: 860px){
    font-size: 1rem;
  }

  @media(max-width: 600px){
    font-size: .7rem;
  }
}

.modal-inactive{
 
  font-family: 'Josefin Slab', serif;
  color: #536273;
  outline: none;
  user-select: none;
  background: transparent;
  font-size: 1.6em;
  display: flex;
  align-items: center;
  border: none;
  cursor: pointer;
  justify-content: flex-end;
  height: 50px;
  padding: 1px 6px;
  text-decoration: none;

  @media(max-width: 1000px){
    font-size: 1.6rem;
  }  
  @media(max-width: 860px){
    font-size: 1rem;
  }
  @media(max-width: 600px){
    font-size: .7rem;
    width: 145%;
  }
}
  }

}
`



function Projects() {
  
  
  const [oneVisible, setOneVisible] = useState(true);
  const transitions = useTransition(oneVisible, null, {
      from: { transform: 'translate3d(0,-40px,0)' },
      enter: { transform: 'translate3d(0,0px,0)' },
      leave: { transform: 'display: none' },
      });
  const [twoVisible, setTwoVisible] = useState(false);
  const twotransitions = useTransition(twoVisible, null, {
    from: { transform: 'translate3d(0,-40px,0)' },
    enter: { transform: 'translate3d(0,0px,0)' },
    leave: { transform: 'display: none' },
    });

  const [threeVisible, setThreeVisible] = useState(false);
  const threetransitions = useTransition(threeVisible, null, {
    from: { transform: 'translate3d(0,-40px,0)' },
    enter: { transform: 'translate3d(0,0px,0)' },
    leave: { transform: 'display: none' },
    });
    const [fourVisible, setFourVisible] = useState(false);
    const fourtransitions = useTransition(fourVisible, null, {
      from: { transform: 'translate3d(0,-40px,0)' },
      enter: { transform: 'translate3d(0,0px,0)' },
      leave: { transform: 'display: none' },
        });
    const [fiveVisible, setFiveVisible] = useState(false);
    const fivetransitions = useTransition(fiveVisible, null, {
      from: { transform: 'translate3d(0,-40px,0)' },
      enter: { transform: 'translate3d(0,0px,0)' },
      leave: { transform: 'display: none' },
      });
  
    const [sixVisible, setSixVisible] = useState(false);
    const sixtransitions = useTransition(sixVisible, null, {
      from: { transform: 'translate3d(0,-40px,0)' },
      enter: { transform: 'translate3d(0,0px,0)' },
      leave: { transform: 'display: none' },
      });



    function closeOthersOne(){
      setOneVisible(true);
      setTwoVisible(false);
      setThreeVisible(false);
      setFourVisible(false);
      setFiveVisible(false);
      setSixVisible(false);
    

    }

    function closeOthersTwo(){
      setOneVisible(false);
      setTwoVisible(true);
      setThreeVisible(false);
      setFourVisible(false);
      setFiveVisible(false);
      setSixVisible(false);
   
    }

    function closeOthersThree(){
      setOneVisible(false);
      setTwoVisible(false);
      setThreeVisible(true);
      setFourVisible(false);
      setFiveVisible(false);
      setSixVisible(false);
    }

    function closeOthersFour(){
      setOneVisible(false);
      setTwoVisible(false);
      setThreeVisible(false);
      setFourVisible(true);
      setFiveVisible(false);
      setSixVisible(false);
    }

    function closeOthersFive(){
      setOneVisible(false);
      setTwoVisible(false);
      setThreeVisible(false);
      setFourVisible(false);
      setFiveVisible(true);
      setSixVisible(false);
    }

    function closeOthersSix(){
      setOneVisible(false);
      setTwoVisible(false);
      setThreeVisible(false);
      setFourVisible(false);
      setFiveVisible(false);
      setSixVisible(true);

    }

    return(
      <>
      <StyledProjects>
        <div className="project-btns">
      <StyledButton>   
        { oneVisible === true ? ( 
          <img
          className="logo-react"
          title="react.js"
          src="https://img.icons8.com/f8f8f1/70/f8f8f1/react-native.png"
          alt="react"
          />
          ) : (
            <div className="empty">
              
            </div>
            )
          }
    <button 
    className={oneVisible === true ? "modal-active" : "modal-inactive"}
    onClick={() => closeOthersOne()}>
        Charity Shop
    </button>
       
    </StyledButton>
<StyledButton> 
  { twoVisible === true ? ( 
    <img
    className="logo-react"
    title="react.js"
    src="https://img.icons8.com/f8f8f1/70/f8f8f1/react-native.png"
    alt="react"
    />
    ) : (
      <div className="empty">
        
      </div>
      )
    }
    <button 
    className={twoVisible === true ? "modal-active" : "modal-inactive"}
    onClick={() => closeOthersTwo()}>
        Riders 4 Life
    </button>
    </StyledButton>
<StyledButton>
        <div>
      </div>
      { threeVisible === true ? ( 
        <img
        className="logo-react"
        title="react.js"
        src="https://img.icons8.com/f8f8f1/70/f8f8f1/react-native.png"
        alt="react"
        />
        ) : (
          <div className="empty">
            
          </div>
          )
        }
    <button 
    className={threeVisible === true ? "modal-active" : "modal-inactive"}
    onClick={() => closeOthersThree()}>
        React Tetris
    </button>
    </StyledButton>
<StyledButton>
  { fourVisible === true ? ( 
    <img
    className="logo-react"
    title="react.js"
    src="https://img.icons8.com/f8f8f1/70/f8f8f1/react-native.png"
    alt="react"
    />
    ) : (
      <div className="empty">
        
      </div>
      )
    } 
    <button 
    className={fourVisible === true ? "modal-active" : "modal-inactive"}
    onClick={() => closeOthersFour()}>
        Cyber MUD
    </button>
    </StyledButton>
<StyledButton>
  { fiveVisible === true ? ( 
    <img
    className="logo-react"
    title="react.js"
    src="https://img.icons8.com/f8f8f1/70/f8f8f1/react-native.png"
    alt="react"
    />
    ) : (
      <div className="empty">
        
      </div>
      )
    } 
    <button 
    className={fiveVisible === true ? "modal-active" : "modal-inactive"}
    onClick={() => closeOthersFive()}>
        Dark Mode
    </button>
    </StyledButton>
<StyledButton>
  { sixVisible === true ? ( 
    <img
    className="logo-react"
    title="react.js"
    src="https://img.icons8.com/f8f8f1/70/f8f8f1/react-native.png"
    alt="react"
    />
    ) : (
      <div className="empty">
        
      </div>
      )
    } 
    <button 
    className={sixVisible === true ? "modal-active" : "modal-inactive"}
    onClick={() => closeOthersSix()}>
        Github Finder
    </button>
    </StyledButton>
    </div>
      <div className="modal-container_projects">
      
    {transitions.map(
        ({ item, key, props: style }) =>
          item && (
            <Two
              style={style}
              key={key}
            />
          )
      )}
      
    {twotransitions.map(
        ({ item, key, props: style }) =>
          item && (
            <One
              style={style}
              key={key}
            />
          )
      )}
      
    {threetransitions.map(
        ({ item, key, props: style }) =>
          item && (
            <Three
              style={style}
              key={key}
            />
          )
      )}
      
    {fourtransitions.map(
        ({ item, key, props: style }) =>
          item && (
            <Four
              style={style}
              key={key}
            />
          )
      )}
      
    {fivetransitions.map(
        ({ item, key, props: style }) =>
          item && (
            <Five
              style={style}
              key={key}
            />
          )
      )}
      
    {sixtransitions.map(
        ({ item, key, props: style }) =>
          item && (
            <Six
              style={style}
              key={key}
            />
          )
      )}
      </div>
      </StyledProjects>
      </>
    )
  }


export default Projects;


