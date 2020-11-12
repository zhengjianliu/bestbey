import React, {Component} from 'react'

class Search extends Component{

  render(){
    return(
      <form onSubmit={e => { e.preventDefault(); }}>
        <label 
          htmlFor="s" 
          className="sr-only"
        >Search Term</label>
        <input
          id="s" 
          type="text" 
          className="searchbar" 
          name="search" 
          placeholder="Search" 
          onChange={this.props.searchHandler}/>
      </form>
    )
  }
}

export default Search
