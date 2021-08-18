import React from 'react'

const Greeting=(props)=> {
    //name="hitesh"
    //props.name="hitesh"//error immutable
    
    return(
        <div>
            <h1>hello {props.name} of {props.skill} </h1>
            <h3>{props.children}</h3>
        </div>
    )
}

export default Greeting
