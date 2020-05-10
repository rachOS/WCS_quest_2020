import React from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import Test from './Test'

class App extends React.Component {

  componentDidMount() {
      let canvas = ReactDOM.findDOMNode(this.refs.myCanvas);
      let ctx = canvas.getContext('2d');

      ctx.fillStyle = 'rgb(200,0,0)';
      ctx.fillRect(10, 10, 55, 50);
      ctx.fillRect(75, 10, 55, 50);
  }

  test = () => { return <div>
      <canvas ref="myCanvas" />
  </div>}

  render() {
      return (
          <div>
              test
              {this.test()}
              <Test/>
          </div>
      );
  }
}



export default App;
