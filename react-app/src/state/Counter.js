import React, { Component } from 'react'

class Counter extends Component {

    constructor(){
        super()
        this.state={
            count: 0
        }
        
        this.addCount=this.addCount.bind(this)
    }
    addCount() {
        //this.state.count++ // will not work
         
        this.setState({
            count: this.state.count+1
            
        },()=> console.log(this.state.count)) //this will show actual value
 
        //console.log(this.state.count) // this will display before update value
        

    }
    render() {
        return (
            <div className= "conatiner">
                <h1>Counter: {this.state.count}</h1>
                {/* <button class="btn btn-primary" onClick={()=>this.addCount()}> */}
                <button className="btn btn-primary" onClick={this.addCount} >
                Add Count
                </button>
            </div>
        )
    }
}

export default Counter
