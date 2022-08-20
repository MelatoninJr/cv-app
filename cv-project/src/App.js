
import './App.css';
import General from './components/general'
import Education from './components/education'
import Experience from './components/experience'
import React, { Component } from 'react'
import uuid from 'react-uuid'

const Constructor =  function() {
  this.school = ''
  this.field = ''
  this.start = ''
  this.finish = ''
  this.id = uuid()
}
const initialEducation = new Constructor()

class App extends Component {

  constructor(props) {
    super(props);


    this.state = {
      generalArray: [1],
      educationArray: [1],
      experienceArray: [1],

      
      generalInformation: {
      general:{
        firstname: '',
        lastname: '',
        phone: '',
        email: ''
      },

    },
      educationInformation: [
        new Constructor()
      ],

      experienceInformation: {

        company: '',
        tite: '',
        start: '',
        finish: ''
      }

    }


    this.onClickBtn = this.onClickBtn.bind(this);
    this.onClickBtnTwo = this.onClickBtnTwo.bind(this);
    this.onChangeTest = this.onChangeTest.bind(this)
  }

  onClickBtn() {

    this.setState(previousState => ({
      educationArray: this.state.educationArray.concat(new Constructor()),
      educationInformation: this.state.educationInformation.concat(new Constructor())
  }))

  }


  onClickBtnTwo() {
    this.setState(previousState => ({
      experienceArray: this.state.experienceArray.concat(1)

  }))
  }

 onChangeTest(e) {
  console.log(e.target.id)
  console.log(e)
  console.log(e.target)
  console.log(e.target.value)
  const nameone = e.target.name
  console.log(this.state.educationArray.map((a, b) => (a)))
  console.log(this.state.educationInformation.nameone)
  this.setState({
    
  })
  console.log(this.state.educationInformation)
 }  

  render() {
 
  return (
    <div className="App">
        <div className='Container'>
        <form id='generalform'>
        <div className='generaltitle'>
                    General Information
                 </div>
                  <General />
  
          <div className='sepcontainer'><div className='seperate'></div></div>
          <div className='educationtitle'>
            Education Information
         </div>
          <button onClick={this.onClickBtn} type='button'>Click Me</button>
                  {this.state.educationArray.map((value, index) => (
                  <div key={index} onChange={this.onChangeTest}>{<Education  />}</div>
                  ))}
          <div className='sepcontainer'><div className='seperate'></div></div>
          <div className='experiencetitle'>
                Work Experience
             </div>
             <button onClick={this.onClickBtnTwo} type='button'>Click Me</button>
                  {this.state.experienceArray.map((value, index) => (
                  <div key={index}>{<Experience />}</div>
                  ))}
            <div className='sepcontainer'><div className='seperate'></div></div>
            <button onClick={this.edit} type='button'>Edit</button>
            <button onClick={this.submit} type='button'>Submit</button>
          </form>
        </div>
    </div>
  );
}

}
export default App;
