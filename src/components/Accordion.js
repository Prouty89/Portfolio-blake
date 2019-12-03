import React from "react";
import SVG from "react-inlinesvg/lib/index";
import Collapse from "@kunukn/react-collapse";
import ReactJs from '../assets/ReactJs.svg';
import Node from '../assets/Node.svg';
import SQL from '../assets/SQL.svg';
import Python from '../assets/Python.svg';
import Figma from '../assets/Figma.svg';
import VisualStudio from '../assets/VisualStudio.svg';
import Git from '../assets/Git.svg';
import Gatsby from '../assets/Gatsby.svg';
import GraphQL from '../assets/GraphQL.svg';
import Jest from '../assets/Jest.svg';
import Postgresql from '../assets/Postgresql.svg';
import Sqlite from '../assets/Sqlite.svg';
import Express from '../assets/Express.svg';
import Redux from '../assets/Redux.svg';
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
    <StyledAccordion className="accordion">

      <Block className="block"
        title="More!"
        isOpen={state[0]}
        onToggle={() => dispatch({ type: "toggle", index: 0 })}
      >
        <div className="accordion-skills">
            <div className="row-one rows">
                <SVG title = "ReactJS" className="react inds" src= {ReactJs}/>
                <SVG title = "Redux" className="redux inds" src= {Redux}/>
                <SVG title = "Jest Testing Framework inds" className="jest inds" src= {Jest}/>
                <SVG title = "GatsbyJS" className="gatsby inds" src= {Gatsby}/>
                <SVG title = "GraphQL" className="graphql inds" src= {GraphQL}/>
            </div>
            <div className="row-two rows">
                <SVG title = "NodeJS" className="node inds" src= {Node}/>
                <SVG title = "Structured Query Language inds" className="sql" src= {SQL}/>
                <SVG title = "Sqlite3" className="sqlite inds" src= {Sqlite}/>
                <SVG title = "PostgreSQL" className="postgres inds" src= {Postgresql}/>
                <SVG title = "ExpressJS" className="express inds" src= {Express}/>
            </div>
            <div className="row-three rows">
                <SVG title = "Python3" className="python inds" src= {Python}/>
                <SVG title = "Visual Studio Code" className="vsc inds" src= {VisualStudio}/>
                <SVG title = "Best Git Practices" className="git inds" src= {Git}/>
                <SVG title = "Figma Interface Design" className="figma inds" src= {Figma}/>
            </div>
        </div>
      </Block>
    </StyledAccordion>
  );
}

export default Accordion;


const StyledAccordion = styled.div`
display: flex;
align-items: flex-end;
padding-bottom: 20px;

@media(max-width: 1300px){
    height: 75%;
    align-items: flex-start;
}

.inds{
  @media(max-width:1300px){
    width: 50%;
  }
}

.accordion-skills{
    display: flex;
    padding: 15px;
    flex-direction: row;
    flex-wrap: wrap;
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
        height: 115px;

        @media(max-width:1300px){
            width: 33%;
            display: flex;
            height: 400px;
            flex-direction: column;
            justify-content: space-around;
    
        }
    }


}

.toggle-bar{
    height: 80%;
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
    height: 90%;
    border-radius: 30px;
    width: 40px;
    border: none;
    background: #373737;
    cursor: pointer;
    height: 55%;
    align-self: flex-end;

    &:focus{
      outline: 0;
    }

    @media(max-width:1300px){
        width: 350px;
        height: 30px;
        display: flex;
        text-align:center;
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