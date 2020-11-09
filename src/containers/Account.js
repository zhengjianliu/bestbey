import React from 'react'

class Account extends React.Component {

    render(){
      let {firstname, lastname} = this.props.user
        return(
            <div className="accountcontainer">
              <h1>Welcome Back</h1>
              <br/>
              <h4>{firstname} {lastname}</h4>
              <button id="logoutbutton" onClick={this.props.logoutClickHandler}>Logout</button>
            </div>
        )
    }
}
export default Account
