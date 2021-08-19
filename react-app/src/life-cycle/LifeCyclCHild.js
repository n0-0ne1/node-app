import React, { Component } from 'react'


export class LifeCyclCHild extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        console.log("lifecycle child -constructor");

    }

    static getDerivedStateFromProps(){
        console.log("lifecycle child -getDerivedStateFromProps");
        return null
        
    }

    componentDidMount(){
        console.log("lifecycle child -componentDidMount");
    }
    
    render() {
        console.log("lifecycle child -render");

        return (
            <div>
                
            </div>
        )
    }
}

export default LifeCyclCHild

