import React, {Component} from 'react'
import {connect} from 'react-redux'

class ControlPanel extends Component{

    changeColor = (e) => {
        const codeValue = e.target.getAttribute('data-code')
        console.log(codeValue)
        const actionData = {
            color:codeValue
        }
        this.props.dispatch({type:"change",data:actionData})
    }

    render(){
        return(
            <div>
                <h3>ControlPanel</h3>
                <button data-code="red" onClick={this.changeColor}>Red</button>
                <button data-code="green" onClick={this.changeColor}>Green</button>
                <button data-code="blue" onClick={this.changeColor}>Blue</button>
            </div>
        )
    }
}

export default connect()(ControlPanel)