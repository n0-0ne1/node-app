import React from 'react'

function StudentList() {

    const names=["jt","garg","verma","garg"]
    const nameList =names.map((name,index)=> <h2 key={name}>{name}</h2>)
    return (
        <div>
            {nameList}
        </div>
    )
}

export default StudentList
