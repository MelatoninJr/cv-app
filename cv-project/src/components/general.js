
import React, { Component } from 'react'
import './general.css'


class General extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className='generalcontainer'>


                 <div className='generalformcontainer'>
                    <div className='column-one'>
                    <label htmlFor='fname'>First Name</label>
                    <input type='text' id='fname' name='fname' defaultValue='' onChange={this.props.onClick} uuid={this.props.uuid}></input>
                    <label htmlFor='lname'>Last Name</label>
                    <input type='text' id='lname' name='lname'defaultValue='' onChange={this.props.onClick} uuid={this.props.uuid}></input>
                    </div>
                    <div className='column-two'>
                    <label htmlFor='phone'>Phone Number</label>
                    <input type='tel' id='phone' name='phone' pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}' defaultValue='' onChange={this.props.onClick} uuid={this.props.uuid}></input>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' name='email' pattern='.+@globex\.com' defaultValue='' onChange={this.props.onClick} uuid={this.props.uuid}></input>
                    </div>
                </div>

            </div>

        )

    }
}

export default General;