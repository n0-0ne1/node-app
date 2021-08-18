import React from 'react'

function NameListOne() {
    const names =["jt","garg","jatin"]
    return (
        <div>
           {
               names.map((name,index)=> <h2 key={index}>{name}</h2>   )
           }
        </div>
    )
}

export default NameListOne
