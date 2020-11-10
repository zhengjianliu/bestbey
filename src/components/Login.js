import React, {Component} from 'react'
import {Link} from 'react-router-dom'
class Login extends Component{
  state = {
    username: "",
    password: "",
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit =  (e) => {
    e.preventDefault()
    this.props.handleUserLogin(this.state)
    this.setState({
      username: "",
      password: ""
    })
    this.props.popupClickHandler()
  }

  render(){
    return(
      <div id="loginContainer" className={this.props.popup? "active":null}>
        <div>
          <h1>Login</h1>
          <form className="loginform" onSubmit={this.handleSubmit}>
            <input value={this.state.username} name="username" type="text" placeholder="username" onChange={this.handleChange} required></input>
            <br/>
            <input value={this.state.password} name="password" type="password" placeholder="password" onChange={this.handleChange} required></input>
            <button type="submit">Login</button>
            <Link to="/signup"><button onClick={this.props.popupClickHandler}>Signup</button></Link>
          </form>
          <button className="closebutton" onClick={this.props.popupClickHandler}>X</button>
        </div>
      </div>
    )
  }
}

export default Login
