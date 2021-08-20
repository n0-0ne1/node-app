import React, { Component } from 'react'

class Student extends Component {
    constructor(props) {
        super(props)
        this.state = {
             users :[],
             id: '',
             name: '',
             email: ''
        }
    }

    componentDidMount(){
        this.getStudents()
    }

    clearForm(){
        this.setState({
            name: '',
            email: ''
        })
    }

    /*
        * CRUD Opeartions 
        ? C - CREATE
        ? R - READ
        ? U - UPDATE
        ? D - DELETE
    */
    // ? Reading the data
    getStudents(){
        fetch("http://localhost:5001/user")
        .then(response => response.json())
        .then(data => this.setState({users: data}) )
        
    }

    // ? Creating the data
    addStudent = () =>{
        const postData = {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email
            })
        }

        fetch("http://localhost:5001/user", postData)
        .then(response => response.json())
        .then(data => {
            this.clearForm()
            this.getStudents()
        })
    }

    // ? UPDATE the data

    editStudent=(id) =>{
        fetch(`http://localhost:5001/user/${id}`)
        .then(response => response.json())
        .then(data => this.setState({
            id: data[0].id,
            name: data[0].name,
            email: data[0].email
        }))
    }

    updateStudent = () =>{
        const putData = {
            method: 'PUT',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email
            })
        }

        fetch(`http://localhost:5001/user/${this.state.id}`, putData)
        .then(response => response.json())
        .then(data => {
            this.clearForm()
            this.getStudents()
        })
    }

    // ? DELETE tha data
    deleteStudent = (id) =>{
        const deleteData = {
            method: 'DELETE',
            headers: {'content-type': 'application/json'}
        }

        fetch(`http://localhost:5001/user/${id}`, deleteData)
        .then(response => response.json())
        .then(data => {this.getStudents()})
    }

    
    render() {
        return (
            <div className="container">
                <h2>Users List</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                        <tr>
                            <th></th>
                            <th>
                                <input type="text" 
                                       value={this.state.name} 
                                       onChange={(event) =>this.setState({name: event.target.value})} 
                                />
                            </th>
                            <th>
                                <input type="text" 
                                       value={this.state.email}  
                                       onChange={(event) =>this.setState({email: event.target.value})}
                                />
                            </th>

                            <th>
                                <button className="btn btn-primary" onClick={this.addStudent}>Add</button> &nbsp;&nbsp;
                                <button className="btn btn-warning" onClick={this.updateStudent}>Update</button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(student => (
                                <tr key={student.id}>
                                    <td>{student.id}</td>
                                    <td>{student.name}</td>
                                    <td>{student.email}</td>
                                    <td>
                                        <button className="btn btn-warning" 
                                                onClick={()=> this.editStudent(student.id)}
                                        >Edit
                                        </button>&nbsp;&nbsp;
                                        <button className="btn btn-danger"
                                                onClick={()=> this.deleteStudent(student.id)}
                                        >Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Student