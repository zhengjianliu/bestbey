import React from 'react'
import { Link } from 'react-router-dom'

class Showpage extends React.Component {
  render() {
    return (
      <div className="showpage"><br/><br/>
        <h2>Showpage.js</h2>
        <br/>
        <Link to="/"><button>Go to showPage</button></Link>
      </div>
    )
  }
}
export default Showpage
