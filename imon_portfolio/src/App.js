import React from 'react';
import './App.scss';
import Nav from './components/navigation/Nav';
import Home from './components/home/Home';

function App() {
  return (
    <div className='App'>
      <div className='overlay'></div>
      <div className='container'>
        <Nav />
        <Home />
      </div>
    </div>
  );
}

export default App;
