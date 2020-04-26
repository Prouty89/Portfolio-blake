import React, { useState } from 'react';
import { useTransition } from 'react-spring';
import Styled from 'styled-components';



import Pdf from '../assets/Resume_Blake_Prouty.pdf';
import About from './About';
import Ed from './Ed';

function Animated() {
  
    //about
    const [modalVisible, setModalVisible] = useState(true);
    const transitions = useTransition(modalVisible, null, {
          from: { display: "none", transform: "translateX(120px)" },
          enter: { display: "flex", transform: "translateX(0px)" },
          leave: { display: "none", transform: "translateX(20px)" }
        });
    //ed
    const [eduModalVisible, setEduModalVisible] = useState(false);
    const edutransitions = useTransition(eduModalVisible, null, {
          from: { display: "none", transform: "translateX(120px)" },
          enter: { display: "flex", transform: "translateX(0px)" },
          leave: { display: "none", transform: "translateX(20px)" }
        });

    function closeOthersEd(){
      setEduModalVisible(true);
      setModalVisible(false);
    }

    function closeOthersAbout(){
      setEduModalVisible(false);
      setModalVisible(true);
    }

    const StyledButton = Styled.div `
        .modal-active{
          font-family: 'Josefin Slab', serif;
          font-weight: bold;
          color: #36475c;
          background: transparent;
          font-size: 2.3em;
          display: flex;
          align-items: center;
          border: none;
          cursor: pointer;
          text-align: left;
          outline: none;
          user-select: none;
          height: 50px;
          margin-right: 15px;
          padding: 1px 6px;
          text-decoration: none;

          @media(max-width: 1000px){
            font-size: 1.6rem;
          }
          @media(max-width: 800px){
            font-size: 1rem;
          }
          @media(max-width: 600px){
            font-size: .8rem;
            margin-right: 1px;
          }
        }

        .modal-inactive{
          font-family: 'Josefin Slab', serif;
          font-size: 1.7em;
          color: #36475c;
          outline: none;
          user-select: none;
          background: transparent;
          display: flex;
          align-items: center;
          border: none;
          cursor: pointer;
          text-align: left;
          margin-right: 15px;
          height: 50px;
          padding: 1px 6px;
          text-decoration: none;

          @media(max-width: 1000px){
            font-size: 1.6rem;
          }

          @media(max-width: 800px){
            font-size: 1rem;
          }

          @media(max-width: 600px){
            font-size: .8rem;
            margin-right: 1px;
          }
        }


          a{
            font-family: 'Josefin Slab', serif;
          color: #36475c;
          background: transparent;
          font-size: 1.7em;
          display: flex;
          align-items: center;
          border: none;
          margin-right: 15px;
          cursor: pointer;
          text-align: left;
          height: 50px;
          padding: 1px 6px;
          text-decoration: none;
          @media(max-width: 1000px){
            font-size: 1.6rem;
          }

          @media(max-width: 800px){
            font-size: 1rem;
          }
          @media(max-width: 600px){
            font-size: .8rem;
            margin-right: 1px;
          }
          }

        }
    `

    return (
    <>
    <div className="home-text-container">
    <StyledButton>
    <button 
    className={modalVisible === true ? "modal-active" : "modal-inactive"}
    onClick={() => closeOthersAbout()}>
        About
    </button>
    </StyledButton>
<StyledButton>
      <button className={eduModalVisible === true ? "modal-active" : "modal-inactive"} onClick={() => closeOthersEd()}>
        Education
    </button>
    </StyledButton>
<StyledButton>
      <a className="modal-button" href={Pdf} target="_blank" rel="noopener noreferrer">
              Resume
      </a>
      </StyledButton>
    </div>
    <div className="modal-container">
    {transitions.map(
        ({ item, key, props: style }) =>
          item && (
            <About
              style={style}
              key={key}
            />
          )
      )}     
    {edutransitions.map(
        ({ item, key, props: style }) =>
          item && (
            <Ed
              style={style}
              key={key}
            />
          )
      )}
      </div>
    </>
    )
}

export default Animated;
