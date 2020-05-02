import React from 'react';
import {Route,Switch,Link} from 'react-router-dom'

import Home from './component/Home'
import Gallery from './component/Gallery'
import Contact from './component/Contact'
import Podlist from './component/Podlist'
import './App.css';

function App() {
  return (
    <div><header>
    <nav>
    <ul>
    <li>
    <Link to="/">Home Page</Link>
    </li>
    <li>
    <Link to="/gallery">Gallery Page</Link>
    </li>
    <li>
    <Link to="/contact">Contact Page</Link>
    </li>
    <li>
    <Link to="/2019/09">April Page</Link>
    </li>
    <li>
    <Link to="/10/2019">March Page</Link>
    </li>
    </ul>
    </nav>
    </header>
    <Switch>
    <Route exact path="/" component={Home}></Route>
    <Route  path="/gallery" component={Gallery}></Route>
    <Route  path="/contact" component={Contact}></Route>
    <Route  path="/:year/:month" component={Podlist}></Route>
    </Switch></div>
    )
}

export default App;

