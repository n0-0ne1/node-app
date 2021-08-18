import React from 'react'

function FunctionClick() {

    function clickHandler() {
        console.log("clicked");
    }
    return (
        <div>
            <h1>button click inside function component</h1>
            <button onClick={clickHandler}>
                Click
            </button>
        </div>
    )
}

export default FunctionClick
