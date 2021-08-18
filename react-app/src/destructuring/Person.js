import React, { Component } from 'react'

class Person extends Component {

    constructor() {
        super()
    
        this.state = { 
             name:"jt",
             city: "del",
             isActive:true
        }
    }
    
    render() {
        const {name,city,isActive}=this.state
        return (
            <div>
                <h1>Welcome {name}</h1>
                <h1>from {city}:{this.state.isActive?"true":"false"}</h1>

            </div>
        )
    }
}

export default Person
