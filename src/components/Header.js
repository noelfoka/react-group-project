import React from 'react';
import { NavLink } from 'react-router-dom/dist';

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
  ];

  return (
    <div className="navbar">
      <div className="logo">Logo</div>
      <div className="nav-link">
        <ul>
          {navLinks.map((item) => (
            <li key={item.id}>
              <NavLink to={item.path}>{item.text}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
