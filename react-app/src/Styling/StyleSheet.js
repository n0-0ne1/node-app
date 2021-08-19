import React from 'react'
import './Styling.css'

function StyleSheet() {
    let className= "primary enlarge-text"

    return (
        <div>
            <h1 className="primary">hello deer</h1>
            <p className= {`${className}`} > Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, voluptates!</p>
            <div className="success">
                This is div test
            </div>
        </div>
    )
}

export default StyleSheet
