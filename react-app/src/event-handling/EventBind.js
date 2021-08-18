import React, { Component } from 'react'

class EventBind extends Component {
    constructor() {
        super()
        this.state = {
             mesaage:"hello"
        }
        //3rd approach
         //this.changeMessage=this.changeMessage.bind(this)
    }
    // changeMessage(){
        
    //     console.log(this)
    //     this.setState({
    //         mesaage:"Thankyou"
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
            {/* basic */}
            {/* <button onClick={this.changeMessage}> Click </button> */}

            {/* 1st approach */}
            {/* <button onClick={this.changeMessage.bind(this)}> Click </button> */}

            {/* 2nd approach */}
            {/* <button onClick={()=>this.changeMessage()}> Click </button> */}

            {/* 3rd approach */}
            {/* <button onClick={this.changeMessage}> Click </button>    */}

            {/* 4th approach */}
            <button onClick={this.changeMessage}> Click </button>   
            </div>
        )
    }
}

export default EventBind
