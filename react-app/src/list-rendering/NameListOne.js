import React from 'react'

function NameListOne() {
    const names =["jt","garg","jatin"]
    return (
        <div>
           {
               names.map(name=> <h2>{name}</h2>   )
           }
        </div>
    )
}

export default NameListOne
