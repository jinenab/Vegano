import React from 'react';
import './index.scss'
import { Nav,Animation,About,Restaurant,Newsletter } from './components';

function App() {
  return (
    <div className="App">
       <Nav></Nav>
       <Animation></Animation>
       <About></About>
       <Restaurant></Restaurant>
       <Newsletter></Newsletter>
 
    </div>
  );
}

export default App;
