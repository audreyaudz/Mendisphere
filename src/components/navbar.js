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

import React from "react";
import { Link } from 'react-router-dom'
import "../styles/navbar.css";

export default function NavBar() {
  return (
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
  )
}