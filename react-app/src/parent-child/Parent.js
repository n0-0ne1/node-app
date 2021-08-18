import React, { Component } from 'react'
import Child from './Child'

class Parent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            parentName: "Parent"    
        }
        //this.callParent=this.callParent.bind(this)
    }

    callParent=(child)=>{
        console.log(`Calling ${this.state.parentName} from ${child}`);
        alert(`Calling ${this.state.parentName} from ${child}`) //popup on browser
    }
    
    render() {
        return (
            <div>
                <Child cp= {this.callParent} />
            </div>
        )
    }
}

export default Parent
