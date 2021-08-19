import React, { Component } from 'react'
import LifeCyclCHild from './LifeCyclCHild';

export class LifeCycleParent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        console.log("lifecycle parent -constructor");

    }

    static getDerivedStateFromProps(){
        console.log("lifecycle parent -getDerivedStateFromProps");
        return null
        
    }

    componentDidMount(){
        console.log("lifecycle parent -componentDidMount");
    }
    
    render() {
        console.log("lifecycle parent -render");

        return (
            <div>
                <LifeCyclCHild />
            </div>
        )
    }
}

export default LifeCycleParent

