import React from 'react';
import './index.scss'
import { Nav,Animation,About,Restaurant,Newsletter, Footer } from './components';

function App() {
  return (
    <div className="App">
       <Nav></Nav>
       <Animation></Animation>
       <About></About>
       <Restaurant></Restaurant>
       <Newsletter></Newsletter>
       <Footer></Footer>
 
    </div>
  );
}

export default App;
