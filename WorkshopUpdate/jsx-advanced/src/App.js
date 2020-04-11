import React from 'react';
import logo from './logo.svg';
import './App.css';
import Avatar from './components/Avatar';

function App() {
  return (
    <div className="App">
      <Avatar name="T-800" image="https://giantbomb1.cbsistatic.com/uploads/scale_small/15/155745/2261295-terminator.jpg" quote={true}/>
    </div>
  );
}

export default App;
