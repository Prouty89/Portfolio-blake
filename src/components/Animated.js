import React, { useState } from 'react';
import { useTransition } from 'react-spring';
import Styled, { keyframes } from 'styled-components';



import Pdf from '../assets/Resume_Blake_Prouty.pdf';
import About from './About';
import Ed from './Ed';

function Animated() {
  
    //about
    const [modalVisible, setModalVisible] = useState(true);
    const transitions = useTransition(modalVisible, null, {
          from: { display: "none", transform: "translateY(80px)" },
          enter: { display: "flex", transform: "translateY(0px)" },
          leave: { display: "none", transform: "translateY(20px)" }
        });
    //ed
    const [eduModalVisible, setEduModalVisible] = useState(false);
    const edutransitions = useTransition(eduModalVisible, null, {
          from: { display: "none", transform: "translateY(80px)" },
          enter: { display: "flex", transform: "translateY(0px)" },
          leave: { display: "none", transform: "translateY(20px)" }
        });

    function closeOthersEd(){
      setEduModalVisible(true);
      setModalVisible(false);
    }

    function closeOthersAbout(){
      setEduModalVisible(false);
      setModalVisible(true);
    }

    const fill = keyframes`
    0% {
        background-image: linear-gradient(120deg, #3d4839 0%, #3d4839 100%);
        background-repeat: no-repeat;
        background-size: 10% 0.05em;
        background-position: 0 100%;
        transition: background-size 0.25s ease-in; 
    }
    100%{
        background-image: linear-gradient(120deg, #3d4839 0%, #3d4839 100%);
        background-repeat: no-repeat;
        background-size: 78% 0.05em;
        background-position: 50% 100%;
        transition: background-size 0.25s ease-in;
    }
`

const fillMob = keyframes`
    0% {
        background-image: linear-gradient(120deg, #3d4839 0%, #3d4839 100%);
        background-repeat: no-repeat;
        background-size: 10% 0.05em;
        background-position: 0 75%;
        transition: background-size 0.25s ease-in; 
    }
    100%{
        background-image: linear-gradient(120deg, #3d4839 0%, #3d4839 100%);
        background-repeat: no-repeat;
        background-size: 78% 0.05em;
        background-position: 50% 75%;
        transition: background-size 0.25s ease-in;
    }
`

    const StyledButton = Styled.div `
        .modal-active{
          font-family: 'Roboto', sans-serif;
          color: #36475c;
          background: transparent;
          font-size: 2em;
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
          background-image: linear-gradient(120deg, #36475c 0%, #36475c 100%);
          background-repeat: no-repeat;
          background-size: 78% 0.05em;
          background-position: 50% 100%;

          @media(max-width: 1000px){
            font-size: 1.6rem;
          }
          @media(max-width: 800px){
            font-size: 1rem;
          }
          @media(max-width: 600px){
            font-size: .9rem;
            margin-right: 1px;
            background-position: 50% 75%;
          }
        }

        .modal-inactive{
          font-family: 'Roboto', sans-serif;
          font-size: 2em;
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

          &:hover{
            animation-name: ${fill};
            animation-timing-function: ease;
            animation-duration: 400ms;
            animation-delay: 0s;
            animation-fill-mode: forwards;
        }

          @media(max-width: 1000px){
            font-size: 1.6rem;
          }

          @media(max-width: 800px){
            font-size: 1rem;
          }

          @media(max-width: 600px){
            font-size: .9rem;
            margin-right: 1px;
            &:hover{
              animation-name: ${fillMob};
              animation-timing-function: ease;
              animation-duration: 400ms;
              animation-delay: 0s;
              animation-fill-mode: forwards;
          }
          }
        }


          a{
            font-family: 'Roboto', sans-serif;
          color: #36475c;
          background: transparent;
          font-size: 2em;
          display: flex;
          align-items: center;
          border: none;
          margin-right: 15px;
          cursor: pointer;
          text-align: left;
          height: 50px;
          padding: 1px 6px;
          text-decoration: none;

          &:hover{
            animation-name: ${fill};
            animation-timing-function: ease;
            animation-duration: 400ms;
            animation-delay: 0s;
            animation-fill-mode: forwards;
        }

          @media(max-width: 1000px){
            font-size: 1.6rem;
          }

          @media(max-width: 800px){
            font-size: 1rem;
          }
          @media(max-width: 600px){
            font-size: .9rem;
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
