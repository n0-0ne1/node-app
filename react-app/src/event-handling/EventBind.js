import React, { Component } from 'react'

class EventBind extends Component {
    constructor() {
        super()
        this.state = {
             mesaage:"hello"
        }
        //3rd approach
        // this.changeMessage=this.changeMessage.bind(this)
    }
    // changeMessage =()=>{
        
    //     console.log(this)
    //     this.setState({
    //         message:"Thankyou"
    //     })
    // }


    //4th approach
    changeMessage =()=>{
        
        console.log(this)
        this.setState({
            mesaage:"Thankyou"
        })
    }
    
    render() {
        return (
            <div>
            <h2>{this.state.mesaage}</h2>
            {/* <button onClick={this.changeMessage}> Click </button> */}
            {/* <button onClick={this.changeMessage.bind(this)}> Click </button> */}
            {/* <button onClick={()=>this.changeMessage()}> Click </button> */}
            {/* <button onClick={this.changeMessage}> Click </button>    */}
            <button onClick={this.changeMessage}> Click </button>   
            </div>
        )
    }
}

export default EventBind
