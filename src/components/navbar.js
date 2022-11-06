// import React from "react";
// import { Link } from "react-router-dom";
// import "../styles/style.css";

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <ul>
//         <li>
//           <Link to="/users">Users</Link>
//         </li>
//         <li>
//           <Link to="/npmhos">Npmhos</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;


import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {
  Link as RouterLink
} from 'react-router-dom';
//import { StaticRouter } from 'react-router-dom/server';
//import { Link } from 'react-router-dom'


export default function NavBar() {
  return (

    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Button component={RouterLink} color="inherit" to="/">Mindbetter</Button>
        </Typography>
        
        <Button component={RouterLink} color="inherit" to="/">About</Button>
        <Button component={RouterLink} color="inherit" to="/org">Organisations</Button>
        <Button component={RouterLink} color="inherit">Request</Button>
        <Button component={RouterLink} color="inherit">Contact</Button>
        <Button component={RouterLink} color="inherit" to="/login">Login/Join us</Button>
      </Toolbar>
    </AppBar>
  </Box>


/*
    <div className="nav-bar flex-row-vcenter-hsb">
      
      <div className="logo flex-row-vstart-hstart">
        <Link to="/" className="txt-221">Mindbetter</Link>
      </div>

      <div className="menu-links flex-row-vcenter-hstart">
        
        <div className="navigation-links flex-row-vstart-hstart">
          <p className="txt-783">About</p>
          <Link to="/org" className="txt-783">Organisations</Link>
          <p className="txt-783">Request</p>
          <p className="txt-31010">Contact</p>
        </div>

        <div className="login-signup flex-row-vcenter-hcenter">
          <Link to="/login" className="txt-615">Login/Join us</Link>
        </div>
      </div>
    </div>
  */
  )
}