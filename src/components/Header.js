import React from 'react';
import { NavLink } from 'react-router-dom/dist';
import './Header.css';
import logoImage from './SpaceLogo.png';

const Header = () => {
  const navLinks = [
    {
      id: 1,
      path: '/rocket',
      text: 'Rocket',
    },
    {
      id: 2,
      path: '/missions',
      text: 'Missions',
    },
    {
      id: 3,
      path: '/profile',
      text: 'My profile',
    },
    {
      id: 4,
      path: '/dragons',
      text: 'Dragons',
    },
  ];

  return (
    <div className="nav_bar">
      <div className="logo">
        <img className="logo-image" src={logoImage} alt="" />
        <h2 className="title">Space Travellers Hub</h2>
      </div>
      <div className="nav-link">
        <ul className="links">
          {navLinks.map((item) => (
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
      </div>
    </div>
  );
};

export default Header;
