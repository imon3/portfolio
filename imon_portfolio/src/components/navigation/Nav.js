import React from 'react';
import './_Nav.scss';

const Nav = () => {
  return (
    <header className='header'>
      <nav className='navigation'>
        <h1>Imon</h1>
        <ul>
          <li>
            <a className='link' href='#'>
              HOME
            </a>
          </li>
          <li>
            <a className='link' href='#'>
              ABOUT
            </a>
          </li>
          <li>
            <a className='link' href='#'>
              PORTFOLIO
            </a>
          </li>
          <li>
            <a className='link' href='#'>
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
