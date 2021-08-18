import React from 'react'

function InPersonList(props) {
    let {p}=props
    console.log(props)
    return (
        <div>
            <h2>
        I am {p.name} with id: {p.id}
    </h2>
        </div>
    )
}

export default InPersonList
