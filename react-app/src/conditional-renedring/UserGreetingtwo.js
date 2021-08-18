
import React, { Component } from 'react'

class UserGreetingtwo extends Component {
    constructor() {
        super()
    
        this.state = {
             isLoggedIn:false
        }
    }
    
    render() {
        
        return (
            this.state.isLoggedIn?<div><h1>welcome jt</h1></div>:<div><h1>welcome guest</h1></div>
     )
    }
}

export default UserGreetingtwo
