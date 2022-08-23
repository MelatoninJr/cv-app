import React, { Component } from 'react'
import './submitpreview.css'
class submitpreview extends Component {

    constructor(props) {

        super(props)
        this.changing = this.changing.bind(this)
    }

    changing(e) {
        return (this.props.data.educationArray[0].id)
    }

    render() {
        //console.log(this.props.data.educationArray[0].id)
        //const test = this.props.data.edcuationArray[0].id + 'this'
        //console.log(test)
        return(
            <div data={this.props.data.educationArray[0].id} >hello</div>



        )
    }

}

export default submitpreview;