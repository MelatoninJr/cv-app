
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
      generalArray: [{
        fname: '',
        lname: '',
        phone: '',
        email: ''
      }],
      educationArray: [new Constructor()],
      experienceArray: [1],

      

  

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

  }))
  console.log(this.state.educationArray)
  console.log(this.state.educationArray[0].id)
  }


  onClickBtnTwo() {
    this.setState(previousState => ({
      experienceArray: this.state.experienceArray.concat(1)

  }))
  }
  /*changetester(e) {
    console.log(e.target)
    console.log(this.state.educationArray)
  }*/

 onChangeTest(e) {
  const name = e.target.name
  const value = e.target.value
  console.log(this.state.generalArray)

  this.setState(( state, props ) => {

    return {
      // leave the rest of state as is...
      ...state,
      // but update the generalArray element at
      //   the particular index
      generalArray: state.generalArray.map((element, index) => {
        if(index===0) {
          return {...element, [name]: value}
        }
        
        return element;


      }
        // a function in here to update just
        //   the one element you want.
      )
    };
  })

 }  

  render() {
 
  return (
    <div className="App">
        <div className='Container'>
        <form id='generalform'>
        <div className='generaltitle'>
                    General Information
                 </div>
                 
                  <General onClick={this.onChangeTest} uuid={uuid()}/>
                  
          <div className='sepcontainer'><div className='seperate'></div></div>
          <div className='educationtitle'>
            Education Information
         </div>
          <button onClick={this.onClickBtn} type='button'>Click Me</button>
                  {this.state.educationArray.map((value, index) => (
                  <div key={index} >{<Education  educationid={this.state.educationArray[index].id} />}</div>
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
  console.log(this.state.generalArray)
}

}
export default App;
