import { HashLink } from 'react-router-hash-link';
import { RxCross1 } from 'react-icons/rx';
import { useState } from 'react';

const NavBarMobile = () => {
  const imageSrc = new URL('/Image/Logo/Logo_5C3D2E.png', import.meta.url).href;
  const [navbarMenu, setNavbarMenu] = useState(false);

  return (
    <div>
      <div
        className="navbar fixed-top bg-scrolled d-flex d-md-none"
        id="NavBar"
      >
        <a href="/#Welcome">
          <img
            className="navbar-icon nav-icon-primary"
            src="/Image/Logo/Logo_5C3D2E.png"
            alt=""
          />
        </a>
        <div className="navbar-menu d-block">
          <img
            className="navbar-menu-icon"
            src="/ButtonIcon/menu.svg"
            alt=""
            onClick={() => setNavbarMenu(true)}
          />
        </div>
      </div>
      {navbarMenu && (
        <div className="navbar-mobile d-md-none" id="NavBarMobile ">
          <div className="navbar-mobile-content">
            <RxCross1
              onClick={() => setNavbarMenu(false)}
              className="navbar-mobile-icon"
            />
            <HashLink
              onClick={() => setNavbarMenu(false)}
              to="/#Welcome"
              className="textlink subtitle"
            >
              Home
            </HashLink>
            <HashLink
              onClick={() => setNavbarMenu(false)}
              to="/#About"
              className="textlink subtitle"
            >
              About
            </HashLink>
            <HashLink
              onClick={() => setNavbarMenu(false)}
              to="/#Projects"
              className="textlink subtitle"
            >
              Projects
            </HashLink>
            <HashLink
              onClick={() => setNavbarMenu(false)}
              to="/#Contact"
              className="textlink subtitle"
            >
              Contact
            </HashLink>
            <div className="navbar-mobile-footer">
              <img className="navbar-mobile-img" src={imageSrc} alt="" />
              <div className="navbar-mobile-text">RUBY CHAN</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBarMobile;
