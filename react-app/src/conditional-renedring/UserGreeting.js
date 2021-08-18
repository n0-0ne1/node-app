import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:true
        }
    }
    
    render() {
        if(this.state.isLoggedIn){
            return (
                <div>
                    <h1>Welcome jt</h1>
                </div>
            )
        }
        else{
            return (
                <div>
                    <h1>Welcome guest</h1>
                </div>
            )
        }
    }
}

export default UserGreeting
