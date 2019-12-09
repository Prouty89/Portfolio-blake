import React from "react";
import Collapse from "@kunukn/react-collapse";
import styled from 'styled-components';


const initialState = [false];
function reducer(state, { type, index }) {
  switch (type) {
    case "toggle":
      state[index] = !state[index];
      return [...state];

    default:
      throw new Error();
  }
}

function Block({ isOpen, title, onToggle, children }) {
  return (
    <div className="toggle-bar">
      <button className="btn-toggle" onClick={onToggle}>
        <span>{title}</span>
      </button>
      <Collapse layoutEffect isOpen={isOpen}>
        {children}
      </Collapse>
    </div>
  );
}

function Accordion() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <>
    <StyledAccordion className="accordion">
      

      <Block className="block"
        title="More!"
        isOpen={state[0]}
        onToggle={() => dispatch({ type: "toggle", index: 0 })}
      >
        <div className="accordion-skills">
            <div className="row-one rows">
                <p  className="react inds">ReactJS</p>
                <p  className="redux inds">Redux</p>
                <p  className="jest inds">Jest JavaScript Testing</p>
                <p  className="gatsby inds">GatsbyJS PWA Generator</p>
                <p  className="graphql inds">GraphQL Data Query</p>
            </div>
            <div className="row-two rows">
                <p className="node inds">NodeJS</p>
                <p className="node inds">RESTful API protocols</p>
                <p  className="express inds">Express.js</p>
                <p  className="sql">Structured Query Langquage</p>
                <p  className="sqlite inds">SQLite DBMS</p>
                <p  className="postgres inds">PostgreSQL DMBS</p>
            </div>
            <div className="row-three rows">
                <p  className="python inds">Python</p>
                <p  className="vsc inds">Scrum Teamwork</p>
                <p  className="vsc inds">Visual Studio Code</p>
                <p className="git inds">Best Git Practices</p>
                <p  className="figma inds">Figma Interface Design System</p>
            </div>
        </div>
      </Block>
    <div className="baseskill-text">I have a firm grasp on the core of Javascript including ES6 features. Understands async code and event looping. Utilizes developer tools to comfortably manipulate the DOM, and the network panel to debug requests. Has built several UIs, widgets, and game applications using the ReactJS framework. For backend applications I use NodeJS to develop server-side and networking applications.</div>
    </StyledAccordion>
    </>
  );
}

export default Accordion;


const StyledAccordion = styled.div`
display: flex;
position: relative;
align-items: flex-end;
width: 100%;
height: 30%;
padding-bottom: 20px;
z-index: 1;

@media(max-width: 1350px){
    display: none;
}

.inds{
  @media(max-width:1300px){
    width: 50%;
  }
}

.accordion-skills{
    display: flex;
    height: 93% !important;
    margin-top: 7px;
    width: 93%;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: 1%;
    margin-right: 1%;
    background: #ffffff;
    box-shadow: rgba(0, 0, 0, 0.15) 0 0 4px;
    color: #777777;
    border-radius: 8px;
    justify-content: space-evenly;

    @media(max-width:1300px){
        padding: 0px;
        display: flex;
        justify-content: center;
        
    }

    .rows{
        width: 90%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 90px;

        @media(max-width:1300px){
            width: 33%;
            display: flex;
            height: 400px;
            flex-direction: column;
            justify-content: space-around;
    
        }
    }


}

.baseskill-text{
  position: absolute;
  bottom: 48%;
  left: 16%;
  display: flex;
  align-items: center;
  text-align: justify;
  width: 66%;
  background: #ffffff;
  padding: 1%;
  height: 27%;
  color: #777777;
  border-radius: 8px;
  z-index: -1;
  box-shadow: rgba(0,0,0,0.15) 0 0 4px;
}

.toggle-bar{
    height: 61%;
    margin-left: 4%;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: flex-end;
    padding-bottom: 50px;

    @media(max-width:1300px){
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: end;
        padding-bottom: 0px;
        height: 100%;
    }
    

.btn-toggle{
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    width: 40px;
    border: none;
    background: #373737;
    cursor: pointer;
    height: 292px;
    align-self: flex-end;

    &:focus{
      outline: 0;
    }

    @media(max-width:1300px){
        width: 350px;
        height: 30px;
        display: flex;
        text-align:center;
        align-self: center;
      margin-bottom: 2%;
    }
}
   span{
       font-family: 'Work Sans', sans-serif;
       display: flex;
       justify content: center; 
       align-items: center;
       font-size: 1.5rem;
       text-align: center;
       writing-mode: vertical-lr;
       transform: rotate(180deg);
       width: 100%
       color: #ffffff;

       @media(max-width:1300px){
        display: flex;
        justify-content: center;
        writing-mode: rl;
        font-size: 1rem;
        text-align: center;
        transform: rotate(0deg);
    }
   }

   .row-one{
    @media(max-width:1300px){
        align-items: center;
    } 
   }
}
`