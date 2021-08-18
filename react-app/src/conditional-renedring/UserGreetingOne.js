
import React, { Component } from 'react'

class UserGreetingOne extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:true
        }
    }
    
    render() {
        let message;
        if(this.state.isLoggedIn){
            message=<h1>Welcome jt</h1>
        }

        else{
            message=<h1>Welcome guest</h1>
        }
        return <div>{message}</div>
    }
}

export default UserGreetingOne
