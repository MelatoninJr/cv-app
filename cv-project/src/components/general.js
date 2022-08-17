
import React, { Component } from 'react'
import './general.css'


class General extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className='generalcontainer'>

                <div className='generaltitle'>
                    General Information
                 </div>
                 <div className='generalformcontainer'>
                    <div className='column-one'>
                    <label for='fname'>First Name</label>
                    <input type='text' id='fname' name='fname'></input>
                    <label for='lname'>Last Name</label>


                    <input type='text' id='lname' name='lname'></input>
                    </div>
                    <div className='column-two'>
                    <label for='phone'>Phone Number</label>
                    <input type='tel' id='phone' name='phone' pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'></input>
                    <label for='email'>Email</label>
                    <input type='email' id='email' name='email' pattern='.+@globex\.com'></input>
                    </div>
                </div>

            </div>

        )

    }
}

export default General;