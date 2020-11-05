import React from 'react'

class Home extends React.Component {

renderProducts = () => {
return this.props.products.map( product => <div>{product.name}</div>)
}

    render(){
        return(
            <div>
                <h2>Home.js</h2>
                {this.renderProducts()}
            </div>
        )
    }
}
export default Home