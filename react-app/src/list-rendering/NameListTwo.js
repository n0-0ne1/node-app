import React from 'react'

function NameListTwo() {
    const names =["jt","garg","jatin"]
    const nameList =names.map(name=> <h2>{name}</h2>)
    return (
        <div>
            {nameList}
        </div>
    )
}

export default NameListTwo
