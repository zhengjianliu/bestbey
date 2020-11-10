import React, {Component} from 'react'

class Search extends Component{

  render(){
    return(
      <form onSubmit={e => { e.preventDefault(); }}>
        <input type="text" className="searchbar" name="search" placeholder="Search" onChange={this.props.searchHandler}/>
      </form>
    )
  }
}

export default Search
