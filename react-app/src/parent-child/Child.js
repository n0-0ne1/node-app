import React from 'react'

function Child(props) {
    console.log(props);
    return (
        <div>
            <h1>Calling PArent from Child</h1>
            <button onClick={()=>props.cp("child component")}>Call Parent</button>
        </div>
    )
}

export default Child
