import React, { Component } from 'react'

export class Student extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             student:[]
        }
    }
    
    componentDidMount(){
        fetch("http://localhost:4321/student")
        .then(response=> response.json())
        .then(data => this.setState({student:data}))
    }

    render() {
        return (
            <div>
                {this.state.student}
            </div>
        )
    }
}

export default Student
