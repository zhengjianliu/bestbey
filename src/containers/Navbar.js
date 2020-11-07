import React from 'react'
import {Link} from 'react-router-dom'
import SlidePanel from './SlidePanel'
import Account from './Account'
import Login from '../components/Login'

class NavBar extends React.Component {
  state={
    clickCart: false,
    clicking: "",
    popup: false
  }

  clickHandler= () =>{
    this.setState({clickCart: !this.state.clickCart, clicking:"cart"})
  }
  accountClickHandler= () =>{
    this.setState({clickCart: !this.state.clickCart, clicking:"account"})
  }
  popupClickHandler = () =>{
    this.setState({popup: !this.state.popup})
  }

    render(){
      console.log(this.state.popup)
      return(
        <div>
          <div id="navbar-item">
            <Link to="/"><h3>Navbar</h3></Link>
            <div>
              <h2 onClick={this.popupClickHandler}>Login</h2>
              <h2 onClick={this.clickHandler}>Cart</h2>
              <h2 onClick={this.accountClickHandler}>Account</h2>
            </div>
          </div>
          <div id="navbar"></div>
          <SlidePanel clickCart={this.state.clickCart} clicking={this.state.clicking}/>
          <Login popup={this.state.popup} popupClickHandler={this.popupClickHandler}/>
        </div>
      )
    }
}
export default NavBar
