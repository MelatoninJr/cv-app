
import './App.css';
import General from './components/general'
import Education from './components/education'
import Experience from './components/experience'
import React, { Component, useState, useEffect} from 'react'
import uuid from 'react-uuid'

const Constructor =  function() {
  this.school = ''
  this.field = ''
  this.start = ''
  this.finish = ''
  this.id = uuid()
}

const ExperienceConstructor = function() {
  this.companyname = ''
  this.positiontitle = ''
  this.startdate = ''
  this.enddate = ''
  this.description = ''
  this.id = uuid()
}

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
      experienceArray: [new ExperienceConstructor()],

    }


    this.onClickBtn = this.onClickBtn.bind(this);
    this.onClickBtnTwo = this.onClickBtnTwo.bind(this);
    this.onChangeTest = this.onChangeTest.bind(this)
    this.onClickEducationFunction = this.onClickEducationFunction.bind(this)
    this.onClickExperienceFunction = this.onClickExperienceFunction.bind(this)
    this.submit = this.submit.bind(this)
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
      experienceArray: this.state.experienceArray.concat(new ExperienceConstructor())

  }))
  console.log(this.state.experienceArray)
  }
  /*changetester(e) {
    console.log(e.target)
    console.log(this.state.educationArray)
  }*/

  onClickEducationFunction(e) {
    const name = e.target.name
    const value = e.target.value

    this.setState(( state, props ) => {
      
      return {

        ...state,

        educationArray: state.educationArray.map((element, index) => {

          if(state.educationArray[index].id === e.target.getAttribute('educationid')) {
            return {...element, [name]: value}
          }
          
          return element;
  
        }
        
        )
      }
    });

   }  

   onClickExperienceFunction(e) {
    const name = e.target.name
    const value = e.target.value
    console.log(e.target.value)
    this.setState(( state, props ) => {
      
      return {

        ...state,

        experienceArray: state.experienceArray.map((element, index) => {

          if(state.experienceArray[index].id === e.target.getAttribute('experienceid')) {
            return {...element, [name]: value}
          }
          
          return element;
  
        }
        
        )
      }
    });
    console.log(this.state.experienceArray)



   }

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

 submit(e) {

  const select = document.querySelector('#generalform')
  select.remove()
  console.log(this.state)

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
                  <div key={index} >{<Education  educationid={this.state.educationArray[index].id} onClickEducation={this.onClickEducationFunction} />}</div>
                  ))}
          <div className='sepcontainer'><div className='seperate'></div></div>
          <div className='experiencetitle'>
                Work Experience
             </div>
             <button onClick={this.onClickBtnTwo} type='button'>Click Me</button>
                  {this.state.experienceArray.map((value, index) => (
                  <div key={index}>{<Experience experienceid={this.state.experienceArray[index].id} onClickExperience={this.onClickExperienceFunction} />}</div>
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
