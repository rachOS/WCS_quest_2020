import React from 'react';
import Nav from './components/Nav'
// import EmailList from './components/EmailList'
// import EmailContent from './components/EmailContent';
// import EmailItem from './components/EmailItem';
import './App.css';
import EmailContent from './components/EmailContent';
import EmailList from './components/EmailList';

function App() {
  return (
    <div className="App">
      
      <div id="layout" class="content pure-g">
        <Nav/>
        <EmailContent/>
        <EmailList/>
      </div>
    </div>
  );
}

export default App;
