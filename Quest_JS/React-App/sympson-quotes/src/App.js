import React from 'react';
import Navbar from './components/Navbar'
import QuotesCard from './components/QuotesCard';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <QuotesCard 
      quote="I'll be back"
      character="T-800"
      image="https://purepng.com/public/uploads/large/purepng.com-terminatorterminatorscience-fictionactionfilmjames-cameronthe-terminatorarnold-schwarzeneggercyborgsarah-connor-1701528658992jzshl.png"/>
      <QuotesCard 
      quote="The Terminator's an infil-tration unit. Part man, part machine. Underneath, it's a hyperalloy combat chassis,mircoprocessor-controlled, fully armored. Very tough...But outside, it's living human tissue. Flesh, skin, hair...blood. Grown for the cyborgs."
      character="Kyle Reese"
      image="https://upload.wikimedia.org/wikipedia/hu/thumb/8/86/Kyle_Reese.png/250px-Kyle_Reese.png"/>
      <QuotesCard 
      quote="Move it, Reese! On your feet soldier! ON YOUR FEET!
      "
      character="Sarah Connor"
      image="https://www.pajiba.com/assets_c/2019/10/Sarah-Connor-t2-thumb-700x511-218149.png"/>
        
    </div>
  );
}

export default App;
