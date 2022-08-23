
import React, { Component } from 'react'
import './general.css'


class General extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        if(this.props.data.statusValue === false)
        return(
            <div className='generalcontainer'>


                 <div className='generalformcontainer'>
                    <div className='column-one'>
                    <label htmlFor='fname'>First Name</label>
                    <input type='text' id='fname' name='fname' defaultValue={this.props.data.generalArray[0].fname} onChange={this.props.onClick} uuid={this.props.uuid}></input>
                    <label htmlFor='lname'>Last Name</label>
                    <input type='text' id='lname' name='lname'defaultValue={this.props.data.generalArray[0].lname} onChange={this.props.onClick} uuid={this.props.uuid}></input>
                    </div>
                    <div className='column-two'>
                    <label htmlFor='phone'>Phone Number</label>
                    <input type='tel' id='phone' name='phone' pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}' defaultValue={this.props.data.generalArray[0].phone} onChange={this.props.onClick} uuid={this.props.uuid}></input>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' name='email' pattern='.+@globex\.com' defaultValue={this.props.data.generalArray[0].email} onChange={this.props.onClick} uuid={this.props.uuid}></input>
                    </div>
                </div>

            </div>

        );else if(this.props.data.statusValue === true) return (
            <div className='generalcontainertwo'>
                                <ul>
                    <li className='header'>
                        <div className='firstname'>{this.props.data.generalArray[0].fname} {this.props.data.generalArray[0].lname}</div>
                    </li>

                    <li>
                        <div className>
                            <div className='phone'>{this.props.data.generalArray[0].phone}</div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div className='phone'>{this.props.data.generalArray[0].email}</div>
                        </div>
                    </li>




                </ul>

            <div className='generalformcontainer'>
                </div>
                </div>
        )

    }
}

export default General;