
import React, { Component } from 'react'

class UserGreetingThree extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:false
        }
    }
    
    render() {
        return (
            this.state.isLoggedIn && <div><h1>welcome jt</h1></div>
        )
    }
}

export default UserGreetingThree
