import React from "react";
import Collapse from "@kunukn/react-collapse";
import { StyledAccordion } from '../styles';


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
