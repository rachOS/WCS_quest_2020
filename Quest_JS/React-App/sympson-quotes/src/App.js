import React from 'react';
import Navbar from './components/Navbar'
import QuotesCard from './components/QuotesCard';
import QuotesList from './components/QuoteList';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <QuotesList/>
      <QuotesCard/>
        
    </div>
  );
}

export default App;
