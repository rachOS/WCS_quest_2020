import React from 'react';
import {Switch, Route} from 'react-router-dom'

// COMPONENTS
import Acceuil from './Components/Acceuil'
import CssDefinition from './Components/CssDefinition'
import HtmlDefinition from './Components/HtmlDefinition'
import JsDefinition from './Components/JsDefinition'
// COMPONENTS

// CSS
import './App.css';
// CSS

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Acceuil}/>
        <Route path='/css' component={CssDefinition}/>
        <Route path='/html' component={HtmlDefinition}/>
        <Route path='/js' component={JsDefinition}/>
      </Switch>
    </div>
  );
}

export default App;
