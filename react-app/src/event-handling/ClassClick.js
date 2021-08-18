import React, { Component } from 'react'

class ClassClick extends Component {

    clickHandler() {
        console.log("clicked");
    }
    render() {
        return (
            <div>
                <h1>button click inside class component</h1>
            <button onClick={this.clickHandler}>
                Click
            </button>
            </div>
        )
    }
}

export default ClassClick
