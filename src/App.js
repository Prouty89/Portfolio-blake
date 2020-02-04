import React from 'react';
import { Link, Outlet  } from 'react-router-dom';

import NotFound from './components/NotFound';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Home from './components/Home';
import Footer from './components/Footer';
import Header from './components/Header';

  function App() {
   return(
     <>
     <nav className="navigation-bar">
       <Link className="nav-tab" to ="/">
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
        </Link>
     </nav>
     <Header/>
     <Footer/>
     </>
   )
}

export default App;
