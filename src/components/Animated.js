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
          from: { display: "none", transform: "translateX(120px)" },
          enter: { display: "inherit", transform: "translateX(0px)" },
          leave: { display: "none", transform: "translateX(20px)" }
        });
    //ed
    const [eduModalVisible, setEduModalVisible] = useState(false);
    const edutransitions = useTransition(eduModalVisible, null, {
          from: { display: "none", transform: "translateX(120px)" },
          enter: { display: "inherit", transform: "translateX(0px)" },
          leave: { display: "none", transform: "translateX(20px)" }
        });
    //Contact
    const [contactModalVisible, setContactModalVisible] = useState(false);
    const contacttransitions = useTransition(contactModalVisible, null, {
          from: { display: "none", transform: "translateX(120px)" },
          enter: { display: "inherit", transform: "translateX(0px)" },
          leave: { display: "none", transform: "translateX(20px)" }
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
          font-family: 'Quicksand', sans-serif;
          font-weight: bold;
          color: #5885b6;
          background: transparent;
          font-size: 2.1em;
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

          @media(max-width: 1000px){
            font-size: 1.8rem;
          }
        }

        .modal-inactive{
          font-family: 'Quicksand', sans-serif;
          font-size: 2.1em;
          color: #36475d;
          outline: none;
          user-select: none;
          background: transparent;
          display: flex;
          align-items: center;
          border: none;
          cursor: pointer;
          text-align: left;
          height: 50px;
          padding: 1px 6px;
          text-decoration: none;

          @media(max-width: 1000px){
            font-size: 1.4rem;
          }
        }


          a{
          font-family: 'Quicksand', sans-serif;
          color: #36475d;
          background: transparent;
          font-size: 2.1em;
          display: flex;
          align-items: center;
          border: none;
          cursor: pointer;
          text-align: left;
          height: 50px;
          padding: 1px 6px;
          text-decoration: none;
          @media(max-width: 650px){
            font-size: 1.4rem;
            
          }
          }

        }
    `

    return (
    <>
    <div className="home-text-container">
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
