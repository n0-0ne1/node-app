
import React, { Component } from 'react'

export class TodoOne extends Component {

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
                    <table className="table">
                        <thead>
                            <tr>
                                <th>UserId</th>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Completed</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.todo.map(todo=>(
                                <tr key={todo.id}>
                                    <td>{todo.userId}</td>
                                    <td>{todo.id}</td>
                                    <td>{todo.title}</td>
                                    <td>{todo.completed?"true":"false"}</td>
                                </tr>  
                              ))    
                        }
                        </tbody>
                    </table>
                  
              }  
            </div>
        )
    }
}

export default TodoOne
