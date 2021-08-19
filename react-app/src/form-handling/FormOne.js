import React, { Component } from 'react'

class FormOne extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username: "",
             comments:"",
             country:"",
             gender:"",
             isActive:false
        }
    }
    
    render() {
        return (
            <div className="container">
                <h1>form component</h1>
                <br />
                <form>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" 
                        className="form-control w-50" 
                        value={this.state.username} 
                        onChange={(event)=>this.setState({username:event.target.value})}
                        />
                    </div>
                    <br />
                    <div className="form-group">
                        <label >comments &nbsp;&nbsp; </label>
                        <textarea 
                        className="form-control w-50" 
                        value={this.state.comments}
                        onChange={(event)=>this.setState({comments:event.target.value})}
                        ></textarea>
                    </div>
                    <br />
                    <div className="form-group">
                        <label >country &nbsp;&nbsp;</label>
                        <select 
                        className="form-select w-50"
                        value={this.state.country}
                        onChange={(event)=>this.setState({country:event.target.value})}
                        >
                        <option value="">---</option>
                        <option value="1">Ind</option>
                        <option value="2">Aus</option>
                        </select>
                    </div>
                    <br />
                    <div className="form-group">
                        <label>gender&nbsp;&nbsp;</label>
                        <input type="radio" 
                        className="form-check-input" 
                        name="gender"
                        value={0}
                        onChange={(event)=>this.setState({gender:event.target.value})}
                        /> Male &nbsp;&nbsp;
                        <input type="radio" 
                        className="form-check-input" 
                        name="gender" 
                        value={1}
                        onChange={(event)=>this.setState({gender:event.target.value})}
                        /> feMale
                    </div>
                    <br />
                    <div className="form-group">
                        <label>isActive&nbsp;&nbsp;</label>
                        <input type="checkbox" 
                        className="form-check-input"
                        checked={this.state.isActive}
                        onChange={()=>this.setState({isActive:!this.state.isActive})} 
                        />
                    </div>
                    <br />
                    <div className="form-group">
                        <button type="submit" 
                        className="btn btn-primary"
                        onClick={(event)=> {event.preventDefault()
                                            console.log(this.state)
                                            } }
                        >Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default FormOne
