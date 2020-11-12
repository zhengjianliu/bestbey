import React, {Component} from 'react'
import {Link} from 'react-router-dom'
class Login extends Component{
  state = {
    username: "",
    password: "",
    errormessage:""
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit =  (e) => {
    e.preventDefault()
    this.props.handleUserLogin(this.state)

    if(this.props.user.id === undefined){
      console.log(this.state.errormessage)
      this.setState({errormessage:"Please check your password or username"})
      this.setState({
        username: "",
        password: ""
      })
    }else if (this.props.user.id !== undefined){
      this.props.popupClickHandler()
    }
  }


  render(){
    console.log("user:",this.state.username)
    return(
      <div id="loginContainer" className={this.props.popup ? "active":null}>
        <div>
          <h1>Login</h1>
          <form className="loginform" onSubmit={this.handleSubmit}>
            <input value={this.state.username} name="username" type="text" placeholder="username" onChange={this.handleChange} required></input>
            <br/>
            <input value={this.state.password} name="password" type="password" placeholder="password" onChange={this.handleChange} required></input>
            {this.state.errormessage === ""?<li className="errormessage">{this.state.errormessage}</li>:null}
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
