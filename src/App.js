import React from 'react';
import { Route } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import './App.css';

const HatsPages = () => ( 
  <div>
    <h1>HATS PAGE</h1>
  </div>
  );



function App() {
  return (
    <div >
     <Route exact path='/' component={ Homepage }/>
     <Route  path='/hats' component={ HatsPages }/>
    </div>
  );
}

export default App;
