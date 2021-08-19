import React, { Component } from 'react'
import axios from 'axios'
export class User extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             users:[]
        }
    }

    componentDidMount(){
        axios("https://jsonplaceholder.typicode.com/users")
        .then(response=> this.setState({
            users:response.data
        }))
    }
    
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(user=>(
                              <tr key={user.id}>
                                  <td>{user.id}</td>
                                  <td>{user.name}</td>
                                  <td>{user.address.city}</td>
                              </tr>  
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default User

