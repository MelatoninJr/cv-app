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
            <label htmlFor='school'>School Name</label>
            <input type='text' id='school' name='school' defaultValue='' educationid={this.props.educationid} onChange={this.props.onClickEducation}></input>
            <label htmlFor='field'>Field of Study</label>
            <input type='text' id='field' name='field' defaultValue='' educationid={this.props.educationid} onChange={this.props.onClickEducation}></input>
            </div>
            <div className='column-two'>
            <label htmlFor='start'>Start Date</label>
            <input type='date'defaultValue="2022-01-01"min="1900-01-01" max="2040-12-31" id='start' name='start' educationid={this.props.educationid} onChange={this.props.onClickEducation}></input>
            <label htmlFor='enddate'>End Date</label>
            <input type='date'defaultValue="2022-01-01"min="1900-01-01" max="2040-12-31" id='enddate' name='end'educationid={this.props.educationid} onChange={this.props.onClickEducation}></input>
            </div>
        </div>

    </div>
        )
    }



}

export default Education;