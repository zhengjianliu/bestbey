import React from 'react'
import {Link} from 'react-router-dom'
import SlidePanel from './SlidePanel'
import Account from './Account'
import Login from '../components/Login'
import Search from '../components/Search'

class NavBar extends React.Component {
  state={
    clickCart: false,
    clicking: "",
    popup: false,
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

  logoutClickHandler = () =>{
    this.setState({clickCart: !this.state.clickCart, clicking:""})
    this.props.logoutHandler()
  }

    render(){
      return(
        <div>
          <div id="navbar-item">
            <Link to="/"><h3>Navbar</h3></Link>
            <div>
              <Search searchHandler={this.props.searchHandler}/>
              {this.props.user.id === undefined?
                <h2 onClick={this.popupClickHandler}>Login</h2>
                :
                <>
                  <h2 onClick={this.clickHandler}>Cart</h2>
                  <h2 onClick={this.accountClickHandler}>Account</h2>
                </>
              }
            </div>
          </div>
          <div id="navbar"></div>
          <SlidePanel
            cart={this.props.cart}
            removeFromCartHandler={this.props.removeFromCartHandler}
            products ={this.props.products}
            clickCart={this.state.clickCart}
            clicking={this.state.clicking}
            user={this.props.user}
            logoutClickHandler={this.logoutClickHandler}/>
          <Login
            popup={this.state.popup}
            popupClickHandler={this.popupClickHandler}
            handleUserLogin={this.props.handleUserLogin}
            />
        </div>
      )
    }
}
export default NavBar
