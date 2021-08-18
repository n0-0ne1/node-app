import React, { Component } from 'react'

class Message extends Component {

    constructor() {
        super()
    
        this.state = {
             name: "jt",
             message:"welcome jt"
        }
    }
    subscribe(){
        this.setState({
            message:"thankyou"
        })
    }
    
    render() {
        return (
            <div className="conatainer">
                <h1>{this.state.message}</h1>
                <button className="btn btn-primary" onClick={()=> this.subscribe()}>
                    Subscribe</button>
            </div>
        )
    }
}

export default Message
