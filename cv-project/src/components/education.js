import React, { Component } from 'react'
import uuid from 'react-uuid'
import './education.css'
class Education extends Component {
    constructor(props) {
        super(props)
        this.state = {
            educationValue: ''
        }

        this.firstchange = this.firstchange.bind(this)
    
    }

    firstchange(e) {
        const name = e.target.name
        const value = e.target.value
        console.log(e.target.value)
        this.setState(( state, props ) => {
          
          return {
      
            
      
            educationValue: this.props.data.educationArray.map((element, index) => {
      
              if(this.props.data.educationArray[index].id === this.props.educationid) {
                console.log('matches')
                return {index}
              }
              
              return element;
      
            }
            
            )
          }
        });
        
      
      
      
       }
   
 

    render() 
  
    {
        
        if(this.props.data.statusValue === false)return(
        <div className='educationcontainer'>
            

         <div className='educationformcontainer' firstchange={this.firstchange}>
            <div className='column-one'>
            <label htmlFor='school'>School Name</label>
            <input type='text' id='school' name='school' defaultValue={this.props.data.educationArray[this.props.indexnumber].school} educationid={this.props.educationid} onChange={this.props.onClickEducation} indexnumber={this.props.indexnumber}></input>
            <label htmlFor='field'>Field of Study</label>
            <input type='text' id='field' name='field' defaultValue={this.props.data.educationArray[this.props.indexnumber].field} educationid={this.props.educationid} onChange={this.props.onClickEducation}></input>
            </div>
            <div className='column-two'>
            <label htmlFor='start'>Start Date</label>
            <input type='date'defaultValue={this.props.data.educationArray[this.props.indexnumber].start}min="1900-01-01" max="2040-12-31" id='start' name='start' educationid={this.props.educationid} onChange={this.props.onClickEducation}></input>
            <label htmlFor='enddate'>End Date</label>
            <input type='date'defaultValue={this.props.data.educationArray[this.props.indexnumber].end}min="1900-01-01" max="2040-12-31" id='enddate' name='end'educationid={this.props.educationid} onChange={this.props.onClickEducation}></input>
            </div>
        </div>

    </div>
        )
        else if(this.props.data.statusValue === true) return (
            <div className='educationcontainertwo' >

            
            <div className='educationformcontainertwo'>
                <ul>
                    <li className='header'>
                        <div className='school'>{this.props.data.educationArray[this.props.indexnumber].school}</div><div className='field'>{this.props.data.educationArray[this.props.indexnumber].field}</div>
                    </li>

                    <li className='headertwo'>
                        <div className = 'start'>
                            {this.props.data.educationArray[this.props.indexnumber].start}
                        </div>                        
                         <div className='end'>
                            {this.props.data.educationArray[this.props.indexnumber].end}
                        </div>
                    </li>
                    <li>

                    </li>




                </ul>
                </div>
                </div>
        )


    }



}

export default Education;