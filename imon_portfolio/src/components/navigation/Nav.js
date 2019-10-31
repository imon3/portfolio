import React from 'react';
import './_Nav.scss';

const Nav = () => {
  return (
    <div className='header-container'>
      <header className='header'>
        <nav className='navigation'>
          <h1>IMON</h1>
          <ul className='nav-ul'>
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
    </div>
  );
};

export default Nav;
