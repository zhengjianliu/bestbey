import React, {Component} from 'react'

class Login extends Component{
  state = {
    username: "",
    password: ""
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
      <div id="loginContainer" className={!this.props.popup? null : "active"}>
        <div>
          <h1>Login</h1>
          <form className="loginform" onSubmit={this.handleSubmit}>
            <input value={this.state.username} name="username" type="text" placeholder="username" onChange={this.handleChange}></input>
            <br/>
            <input value={this.state.password} name="password" type="password" placeholder="password" onChange={this.handleChange}></input>
            <button type="submit">Login</button>
            <button type="submit">Signup</button>
          </form>
          <button className="closebutton" onClick={this.props.popupClickHandler}>X</button>
        </div>
      </div>
    )
  }
}

export default Login
