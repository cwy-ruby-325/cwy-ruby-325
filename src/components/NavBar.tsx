import { HashLink } from 'react-router-hash-link';
import NavBarMobile from './Mobile/NavBar_Mobile';

function NavBar() {
  return (
    <div className="navbar fixed-top bg-scrolled d-none d-md-flex" id="NavBar">
      <a href="/Home#Welcome">
        <img
          className="navbar-icon nav-icon-primary"
          src="/Image/Logo/Logo_5C3D2E.png"
          alt=""
        />
      </a>
      <div className="navbav-content d-none d-md-block">
        <HashLink to="/Home#Welcome" className="textlink subtitle">
          Home
        </HashLink>
        <HashLink to="/Home#About" className="textlink subtitle">
          About
        </HashLink>
        <HashLink to="/Home#Projects" className="textlink subtitle">
          Projects
        </HashLink>
        <HashLink to="/Home#Contact" className="textlink subtitle">
          Contact
        </HashLink>
      </div>
    </div>
  );
}
export default NavBar;
