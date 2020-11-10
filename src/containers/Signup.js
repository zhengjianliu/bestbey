import React from 'react'

class Signup extends React.Component {
  state = {
    username: "",
    lastname:"",
    firstname: "",
    password:""
  }


  changeHandler = e =>{
    this.setState({[e.target.name]: e.target.value})
  }

  submitHandler = e =>{
    console.log("submitting")
    e.preventDefault()
    this.props.signupHandler(this.state)
    this.setState({
      username: "",
      lastname:"",
      firstname: "",
      password:""
    })
  }

    render(){
        return(
            <div style={{paddingTop:"60px"}}>
              <div className="signupleftside">
                <h1>Best Bey</h1>
              </div>
              <div className="signuprightside">
                <h1>Sign Up</h1>
                <form className="signupform" onSubmit={this.submitHandler}>
                <hr className="hrline"/>
                  <input value={this.state.firstname} type="text" placeholder="First Name" name="firstname" onChange={this.changeHandler}></input>
                  <br/>
                  <input value={this.state.lastname}type="text" placeholder="Last Name" name="lastname" onChange={this.changeHandler}></input>
                  <br/>
                  <input value={this.state.username} type="text" placeholder="Username" name="username" onChange={this.changeHandler}></input>
                  <br/>
                  <input value={this.state.password} type="password" placeholder="Password" name="password" onChange={this.changeHandler}></input>
                  <br/>
                  <button type="submit">Register</button>
                </form>
              </div>

            </div>
        )
    }
}
export default Signup
