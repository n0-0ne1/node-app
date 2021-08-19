import React from 'react'


const heading={
    fonctSize: "12px",
    color:"Blue"
}

const div={
    color:"white",
    backgroundColor:"black"
}
function StyleSheetOne() {
    return (
        <div style={div}>
            <p style={heading}>INline Styling</p>
        </div>
    )
}



export default StyleSheetOne
