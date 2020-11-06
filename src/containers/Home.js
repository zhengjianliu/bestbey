import React from 'react'
import {Link} from 'react-router-dom'

class Home extends React.Component {

  renderProducts = () => {
    return this.props.products.map(product => <div>{product.name}</div>)
  }

  render() {
    return (
      <section>

        <div id="homepage" className={this.props.clicked? "slidetoleft": null}>
          <h2>First Home Page</h2>
          {this.renderProducts()}
          <br/>
          <Link to="/showpage">
            <button>Go to showPage</button>
          </Link>
          <br/>
          <button onClick={this.props.clickHandler}>Go to second page</button>
        </div>

        <div id="secondpage" className={this.props.clicked?"slidetoright":null}>
          <h2>Second Home Page</h2>
          {this.renderProducts()}
          <br/>
          <Link to="/showpage">
            <button>Go to showPage</button>
          </Link>
          <br/>
          <button onClick={this.props.clickHandler}>Go to first page</button>
        </div>

      </section>

      )
  }
}
export default Home
