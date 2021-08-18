import React from 'react'

function InPersonList(props) {
    let {person}=props
    return (
        <React.Fragment>
            <h2 key={person.id}>
        I am {person.name} with id: {person.id}
    </h2>
        </React.Fragment>
    )
}

export default InPersonList
