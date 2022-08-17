import React, { Component } from 'react'
import './education.css'
class Education extends Component {
    constructor(props) {

        super(props)
    }



    render() {
        return(
        <div className='educationcontainer'>

        <div className='educationtitle'>
            Education Information
         </div>
         <div className='educationformcontainer'>
            <div className='column-one'>
            <label for='schoolname'>School Name</label>
            <input type='text' id='schoolname' name='schoolname'></input>
            <label for='fieldname'>Field of Study</label>
            <input type='text' id='fieldname' name='fieldname'></input>
            </div>
            <div className='column-two'>
            <label for='startdate'>Start Date</label>
            <input type='date'value="2022-01-01"min="1900-01-01" max="2040-12-31" id='startdate' name='startdate' ></input>
            <label for='enddate'>End Date</label>
            <input type='date'value="2022-01-01"min="1900-01-01" max="2040-12-31" id='enddate' name='enddate'></input>
            </div>
        </div>

    </div>
        )
    }



}

export default Education;