import React from 'react'

function NameListThree() {
    const person =[
        {id:1,name:"jt"},
        {id:2,name:"garg"},
        {id:3,name:"jt"}
        
    ]
    const personList=person.map(person=>( 
    <h2 key={person.id}>
        I am {person.name} with id: {person.id}
    </h2>))
    return (
        <div>
            {personList}
        </div>
    )
}

export default NameListThree
