import React from 'react';
import Navbar from './components/Navbar'
import QuotesList from './components/QuoteList';
import QuoteForm from './components/QuoteForm'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <QuoteForm />
      <QuotesList/>
    </div>
  );
}

export default App;
