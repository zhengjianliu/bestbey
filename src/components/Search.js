import React, {Component} from 'react'

class Search extends Component{

  render(){
    return(
      <form >
        <input className="searchbar" value={this.props.searchterm} name="search" placeholder="Search" onChange={this.props.searchHandler}/>
      </form>
    )
  }
}

export default Search
