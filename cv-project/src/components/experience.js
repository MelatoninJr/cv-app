import React, { Component } from 'react'
import './experience.css'


class Experience extends Component {
    constructor(props) {

        super(props)
    }




    render() {
        return(
            <div className='experiencecontainer'>

            <div className='experiencetitle'>
                Work Experience
             </div>
             <div className='experienceformcontainer'>
                <div className='column-one'>
                <label for='companyname'>Company Name</label>
                <input type='text' id='companyname' name='companyname'></input>
                <label for='positiontitle'>Position Title</label>
                <input type='text' id='positiontitle' name='positiontitle'></input>
                </div>
                <div className='column-two'>

                <label for='startdate'>Start Date</label>
                <input type='date'value="2022-01-01"min="1900-01-01" max="2040-12-31" id='startdate' name='startdate' ></input>
                <label for='enddate'>End Date</label>
                <input type='date'value="2022-01-01"min="1900-01-01" max="2040-12-31" id='enddate' name='enddate'></input>

                </div>


            </div>
            <div className='column-three'>
                <textarea name="description">Work Task Examples...</textarea>
                </div>
                
        </div>

        )
    }
}

export default Experience;