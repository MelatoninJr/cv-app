import React, { Component } from 'react'
import './experience.css'


class Experience extends Component {
    constructor(props) {

        super(props)
    }




    render() {
        return(
            <div className='experiencecontainer'>

            <div className='conone'>
             <div className='experienceformcontainer'>
                <div className='column-one'>
                <label htmlFor='companyname'>Company Name</label>
                <input type='text' id='companyname' name='companyname' defaultValue=''></input>
                <label htmlFor='positiontitle'>Position Title</label>
                <input type='text' id='positiontitle' name='positiontitle' defaultValue=''></input>
                </div>
                <div className='column-two'>

                <label htmlFor='startdate'>Start Date</label>
                <input type='date'defaultValue="2022-01-01"min="1900-01-01" max="2040-12-31" id='startdate' name='startdate' ></input>
                <label htmlFor='enddate'>End Date</label>
                <input type='date'defaultValue="2022-01-01"min="1900-01-01" max="2040-12-31" id='enddate' name='enddate' ></input>
                </div>
                </div>

                </div>
                <div className='contwo'>
                <div className='column-three'>
                <textarea name="description" defaultValue='Work Task Examples...'></textarea>
                </div>
            </div>

                
        </div>

        )
    }
}

export default Experience;