import React, { Component } from 'react'
import uuid from 'react-uuid'
import './education.css'
class Education extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstValue: ''
        }
        this.firstChange = this.firstChange.bind(this)

    }
    firstChange(e) {
        //console.log(this.state.firstValue)

        this.setState(previousState => ({
            firstValue: e.target.value
        }))
    }
    
    secondChange(e) {
        //this.secondValue = e.target.value
        //console.log(e.target.value)
    }
    thirdChange(e) {
        //this.thirdValue = e.target.value
        //console.log(e.target.value)
    }
    fourthChange(e) {
        //this.fourthValue = e.target.value
        //console.log(e.target.value)
    }
 

    render() {
 
        return(
        <div className='educationcontainer'>


         <div className='educationformcontainer'>
            <div className='column-one'>
            <label htmlFor='schoolname'>School Name</label>
            <input type='text' id='schoolname' name='schoolname' defaultValue='' educationuuid={this.props.educationuuid}></input>
            <label htmlFor='fieldname'>Field of Study</label>
            <input type='text' id='fieldname' name='fieldname' defaultValue='' ></input>
            </div>
            <div className='column-two'>
            <label htmlFor='startdate'>Start Date</label>
            <input type='date'defaultValue="2022-01-01"min="1900-01-01" max="2040-12-31" id='startdate' name='startdate' onChange={this.thirdChange}></input>
            <label htmlFor='enddate'>End Date</label>
            <input type='date'defaultValue="2022-01-01"min="1900-01-01" max="2040-12-31" id='enddate' name='enddate'onChange={this.fourthChange} ></input>
            </div>
        </div>

    </div>
        )
    }



}

export default Education;