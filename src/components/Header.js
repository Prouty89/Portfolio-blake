import React from 'react';
import { useRoutes } from 'react-router-dom';

import NotFound from './NotFound';
import Projects from './Projects';
import Contact from './Contact';
import Home from './Home';

function Header() {
    let element = useRoutes([
        // These are the same as the props you provide to <Route>
        { path: '/', element: <Home /> },
        { path: 'projects', element: <Projects /> },
        { path: 'contact',element: <Contact />,
        },
        // Redirects use a redirectTo property to
        { path: 'home', redirectTo: '/' },
        // Not found routes work as you'd expect
        { path: '*', element: <NotFound /> },
      ]);
      // The returned element will render the entire element
      // hierarchy with all the appropriate context it needs
      return element;
  }

  export default Header;