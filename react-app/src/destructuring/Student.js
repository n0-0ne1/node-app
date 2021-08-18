import React from 'react'

function Student(props) {
    let {name,subject}=props
    return (
        <div>
            <h3>{name} has {subject}</h3>
        </div>
    )
}

export default Student
