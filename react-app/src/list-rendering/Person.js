import React from 'react'
import InPersonList from './InPersonList'

function Person() {
    const person =[
        {id:1,name:"jt"},
        {id:2,name:"garg"},
        {id:3,name:"jt"}
        
    ]
    const personList=person.map(person=> <InPersonList key={Person.id} person={person} />)
    return (
        <div>
            {personList}
        </div>
    )
}

export default Person
