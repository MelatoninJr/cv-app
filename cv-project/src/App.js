
import './App.css';
import General from './components/general'
import Education from './components/education'
import Experience from './components/experience'
import React, { Component } from 'react'


class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
  return (
    <div className="App">
        <div className='Container'>
        <form id='generalform'>
          <General />
          <div className='sepcontainer'><div className='seperate'></div></div>
          <Education />
          <div className='sepcontainer'><div className='seperate'></div></div>
          <Experience />
          </form>
        </div>
    </div>
  );
}
}
export default App;
