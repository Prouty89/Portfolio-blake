import React, { useState } from 'react';
import { useSpring, animated, useTransition } from 'react-spring';
import Styled from 'styled-components';



import Pdf from '../assets/Resume_Blake_Prouty.pdf';
import About from './About';
import Ed from './Ed';
import Contact from './Contact';

function Animated() {
  
    //about
    const [modalVisible, setModalVisible] = useState(true);
    const transitions = useTransition(modalVisible, null, {
        from: { opacity: 0, transform: "translateY(-40px)" },
        enter: { opacity: 1, transform: "translateY(0px)" },
        leave: { opacity: 0, transform: "translateY(40px)" }
        });
    //ed
    const [eduModalVisible, setEduModalVisible] = useState(false);
    const edutransitions = useTransition(eduModalVisible, null, {
        from: { opacity: 0, transform: "translateY(-40px)" },
        enter: { opacity: 1, transform: "translateY(0px)" },
        leave: { opacity: 0, transform: "translateY(40px)" }
        });
    //Contact
    const [contactModalVisible, setContactModalVisible] = useState(false);
    const contacttransitions = useTransition(contactModalVisible, null, {
        from: { opacity: 0, transform: "translateY(-40px)" },
        enter: { opacity: 1, transform: "translateY(0px)" },
        leave: { opacity: 0, transform: "translateY(40px)" }
        });


    const second = useSpring({
        config: { duration: 1200 },
        opacity: 1,
        from: { opacity: 0, color: '#d6e5e5' },
        to: { opacity: 1, color: '#36475d'},
        delay: '2000'
    });

   

    function closeOthersEd(){
      setEduModalVisible(true);
      setModalVisible(false);
      setContactModalVisible(false);
    

    }

    function closeOthersAbout(){
      setEduModalVisible(false);
      setModalVisible(true);
      setContactModalVisible(false);
   
    }

    function closeOthersContact(){
      setEduModalVisible(false);
      setModalVisible(false);
      setContactModalVisible(true);
    
    }

    const StyledButton = Styled.div `
        .modal-active{
          font-family: 'Quattrocento', serif;
          color: #080808;
          background: transparent;
          font-size: 2.1em;
          font-weight: bold;
          display: flex;
          align-items: center;
          border: none;
          cursor: pointer;
          text-align: left;
          outline: none;
          user-select: none;
          height: 50px;
          padding: 1px 6px;
          text-decoration: none;
        }

        .modal-inactive{
          font-family: 'Quattrocento', serif;
          color: #080808;
          outline: none;
          user-select: none;
          background: transparent;
          font-size: 1.7em;
          display: flex;
          align-items: center;
          border: none;
          cursor: pointer;
          text-align: left;
          height: 50px;
          padding: 1px 6px;
          text-decoration: none;
        }


          a{
          font-family: 'Quattrocento', serif;
          color: #080808;
          background: transparent;
          font-size: 1.7em;
          display: flex;
          align-items: center;
          border: none;
          cursor: pointer;
          text-align: left;
          height: 50px;
          padding: 1px 6px;
          text-decoration: none;
          }
        }
    `

    return (
    <>
    <div className="home-text-container">
    <div className="welcome-text-container">
    <p className="welcome-text">Blake Prouty</p>
    <div className="logos_big">
            {/* <img className ="logo" title="React.js" src={ReactLogo} alt="react-logo" />
            <img className ="logo" title="Redux" src={Redux} alt="redux-logo" />
            
            <SVG className="logo" title="Node.js" src={Node} /> */}
            <img title="react.js" src="https://img.icons8.com/5885b6/70/5885b6/react-native.png" alt="react"/>
            <img title="redux" src="https://img.icons8.com/5885b6/70/5885b6/redux.png" alt="redux"/>
            <img title="node.js" src="https://img.icons8.com/windows/70/5885b6/node-js.png" alt="node"/>
    </div>
    </div>
        <animated.div className = "second-animation animated-text" style={second}>Full Stack Developer</animated.div>
    </div>
    <div className="modal-container">
    <StyledButton>
    <button 
    className={modalVisible === true ? "modal-active" : "modal-inactive"}
    onClick={() => closeOthersAbout()}>
        About
    </button>
    </StyledButton>
    {transitions.map(
        ({ item, key, props: style }) =>
          item && (
            <About
              style={style}
              key={key}
            />
          )
      )}
          <StyledButton>
      <button className={eduModalVisible === true ? "modal-active" : "modal-inactive"} onClick={() => closeOthersEd()} >
        Education
    </button>
    </StyledButton>
    {edutransitions.map(
        ({ item, key, props: style }) =>
          item && (
            <Ed
              style={style}
              key={key}
            />
          )
      )}
      <StyledButton>
      <button className={contactModalVisible === true ? "modal-active" : "modal-inactive"} onClick={() => closeOthersContact()}>
        Contact
    </button>
    </StyledButton>
    {contacttransitions.map(
        ({ item, key, props: style }) =>
          item && (
            <Contact
              style={style}
              key={key}
            />
          )
      )}
      <StyledButton>
      <a className="modal-button" href={Pdf} target="_blank">
              Resume
      </a>
      </StyledButton>
      </div>
    </>
    )
}

export default Animated;
