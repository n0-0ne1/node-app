
import React, { Component } from 'react'

export class Todo extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             todo:[]
        }
    }
    // componentDidMount(){
    //     fetch("https://jsonplaceholder.typicode.com/todos")
    //     .then(response=> response.json())
    //     .then(data => console.log(data))
    // }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response=> response.json())
        .then(data => this.setState({todo:data}))
    }
    
    render() {
        return (
            
            <div>
              <h1>list of todos</h1>
              {
                  this.state.todo.map(todo =>(
                   <ul key={todo.id}>
                       <li>
                           {todo.title}
                       </li>
                   </ul>   
                  ))
              }  
            </div>
        )
    }
}

export default Todo
