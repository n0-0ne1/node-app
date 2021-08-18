import React, { Component } from 'react'

export class Welcome1 extends Component {
    render() {
        console.log(this);
        return (
            <div>
                <h1>hey  {this.props.name}</h1>
            </div>
        )
    }
}

export default Welcome1
