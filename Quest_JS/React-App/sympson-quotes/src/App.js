import React from 'react';
import Navbar from './components/Navbar'
import QuotesCard from './components/QuotesCard';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <QuotesCard/>
      <QuotesCard/>
    </div>
  );
}

export default App;
