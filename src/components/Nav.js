import React from 'react';
import { Link } from 'react-router-dom';

import Pdf from '../assets/Resume1.pdf';

import { LINKS } from '../menu-utils';


  function Nav(props) {
    const { tab } = props;
    
   return(
     <>
     <nav className="navigation-bar">
     <Link className={"nav-tab" + (props.location.pathname === LINKS ? "active" : "")}
            >{tab}<div className="nav-text"> </div>
            <div className={props.location.pathname === LINKS ? "active" : ""}>
            </div>
        </Link>
       {/* <Link className="nav-tab" to ="/">
         <div className="nav-text"> 
           Home
         </div>
        </Link>
       <Link className="nav-tab" to ="projects">
         <div className="nav-text">
         Projects
         </div>
        </Link>
       <Link className="nav-tab" to ="contact">
         <div className="nav-text">
         Contact
         </div>
        </Link> */}
        <div className="nav-tab">
         <a href={Pdf} target="_blank" className="nav-text">
         Resume
         </a>
         </div>
     </nav>
     </>
   )
}

export default Nav;