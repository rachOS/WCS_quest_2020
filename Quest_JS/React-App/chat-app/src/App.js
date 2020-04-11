import React from 'react';
import './App.css';
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Contact status={true} name="T800" avatar="http://vignette4.wikia.nocookie.net/terminator/images/8/85/Trjs67656.jpg/revision/latest?cb=20090525095809" />
      <Contact status={false} name="Kyle Reese" avatar="https://giantbomb1.cbsistatic.com/uploads/scale_small/0/7667/1287517-reese1.jpg"/>
      <Contact status={true} name="Sarah Connor" avatar="http://wallsdesk.com/wp-content/uploads/2016/11/linda-hamilton-Background-.jpg"/>
    </div>
  );
}

export default App;
