import React from 'react';
import './App.css';
import DisplayEmployees from './components/DisplayEmployees'
import axios from 'axios'

// Employee test (bouchon)
const sampleEmployee = {
  gender: 'male',
  name: {
    first: 'Charlie',
    last: 'Thompson',
  },
  location: {
    street: {
      number: 761,
      name: 'Tay Street',
    },
    city: 'Timaru',
    postcode: 76111,
  },
  email: 'charlie.thompson@example.com',
  picture: {
    medium: 'https://randomuser.me/api/portraits/med/men/40.jpg',
  },
};

class App extends React.Component{
   constructor(props){
     super(props);
     this.state = {employee: sampleEmployee};
     this.getEmployee = this.getEmployee.bind(this);
   };

  getEmployee(){
    axios.get('https://randomuser.me/api')
      .then(response => response.data)
      .then(data =>{
        console.log(data);
        
        this.setState({employee: data.results[0]})
      });
  };

  render(){
    return (
    <div className="App">
      <DisplayEmployees employee={this.state.employee}/>
      <button type="button" onClick={this.getEmployee}>Get employee</button>
    </div>
    );
  };
  
};

export default App;
