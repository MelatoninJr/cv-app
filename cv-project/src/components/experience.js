import React, { Component } from 'react'
import './experience.css'


class Experience extends Component {
    constructor(props) {

        super(props)
    }




    render() {
        if(this.props.data.statusValue === false)
        
        return(

            <div className='experiencecontainer'>
               
            <div className='conone'>
             <div className='experienceformcontainer'>

                <div className='column-one'>
                <label htmlFor='companyname'>Company Name</label>
                <input type='text' id='companyname' name='companyname' defaultValue={this.props.data.experienceArray[this.props.indexnumber].companyname} experienceid={this.props.experienceid} onChange={this.props.onClickExperience}></input>
                <label htmlFor='positiontitle'>Position Title</label>
                <input type='text' id='positiontitle' name='positiontitle' defaultValue={this.props.data.experienceArray[this.props.indexnumber].positiontitle} experienceid={this.props.experienceid} onChange={this.props.onClickExperience}></input>
                </div>
                <div className='column-two'>

                <label htmlFor='startdate'>Start Date</label>
                <input type='date'defaultValue={this.props.data.experienceArray[this.props.indexnumber].startdate}min="1900-01-01" max="2040-12-31" id='startdate' name='startdate' experienceid={this.props.experienceid} onChange={this.props.onClickExperience} ></input>
                <label htmlFor='enddate'>End Date</label>
                <input type='date'defaultValue={this.props.data.experienceArray[this.props.indexnumber].enddate}min="1900-01-01" max="2040-12-31" id='enddate' name='enddate' experienceid={this.props.experienceid} onChange={this.props.onClickExperience}></input>
                </div>
                </div>

                </div>
                <div className='contwo'>
                <div className='column-three'>
                <textarea name="description" placeholder='Work Task Examples...'defaultValue={this.props.data.experienceArray[this.props.indexnumber].description} experienceid={this.props.experienceid} onChange={this.props.onClickExperience}></textarea>
                </div>
            </div>

                
        </div>

        ); else if(this.props.data.statusValue === true) return (
            <div className='experiencecontainertwo'>

   
             <div className='experienceformcontainertwo'>
             <ul>
                    <li className='header'>
                        <div className ='company'>{this.props.data.experienceArray[this.props.indexnumber].companyname}</div>
                        <div className ='position'>
                            {this.props.data.experienceArray[this.props.indexnumber].positiontitle}
                        </div>
                    </li>
                    <li>

                    </li>
                    <li className='headertwo'>
                        <div className='start'>
                            {this.props.data.experienceArray[this.props.indexnumber].startdate}
                        </div>
                        <div className='end'>
                            {this.props.data.experienceArray[this.props.indexnumber].enddate}
                        </div>
                    </li>
  
                    <li className='headerthree'>
                        <div className='description'>
                            {this.props.data.experienceArray[this.props.indexnumber].description}
                        </div>
                    </li>




                </ul>






                </div>
                </div>

        )
    }
}

export default Experience;