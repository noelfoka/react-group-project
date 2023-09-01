import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiCloseCircleLine } from 'react-icons/ri';
import logoImage from './SpaceLogo.png';

const Navbar = () => {
  const navlinks = [
    {
      id: 1,
      path: '/',
      text: 'Rockets',
    },
    {
      id: 2,
      path: '/missions',
      text: 'Missions',
    },
    {
      id: 4,
      path: '/profile',
      text: 'My profile',
    },
  ];

  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="nav_bar">
      <div className="logo">
        <img className="logo-image" src={logoImage} alt="" />
        <h2 className="title">Space Travelers&apos; Hub</h2>
      </div>
      <ul className="links">
        {navlinks.map((item) => (
          <li className="link" key={item.id}>
            <NavLink
              to={item.path}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {item.text}
            </NavLink>
          </li>
        ))}
      </ul>
      <div>
        <div className="menu">
          <GiHamburgerMenu size={40} onClick={handleNav} />
        </div>
        <div className={nav ? 'drawer' : 'drawer-1'}>
          <div className="close">
            <RiCloseCircleLine size={60} onClick={handleNav} />
          </div>
          <ul className="menu-links">
            <li>
              <NavLink to="/" onClick={() => setNav(true)}>
                Rockets
              </NavLink>
            </li>
            <li>
              <NavLink to="/missions" onClick={() => setNav(true)}>
                Missions
              </NavLink>
            </li>
            <li>
              <NavLink to="/dragons" onClick={() => setNav(true)}>
                Dragons
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile" onClick={() => setNav(true)}>
                My Profile
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
