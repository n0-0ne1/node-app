import React from 'react'

function InPersonList(props) {
    let {person}=props
    return (
        <div>
            <h2 >
        I am {person.name} with id: {person.id}
    </h2>
        </div>
    )
}

export default InPersonList
