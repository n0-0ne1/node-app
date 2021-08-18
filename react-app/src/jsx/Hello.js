
import React from "react"
// function Hello(){
//     return (

//         <div>
//             <h1>Hello mfs</h1>
//         </div>
//     )
// }


function Hello(){
    return React.createElement('div',{id:'dvHeader',className: "header"},React.createElement('h1',null,"Hello mfs"))
}

export default Hello;