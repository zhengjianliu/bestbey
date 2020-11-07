import React from 'react'

class SlidePanel extends React.Component {

    render(){
        return(
            <div id="slidepanel" className={this.props.clickCart? "active":null}>
              <h1 style={{paddingTop:"60px"}}>{this.props.clicking}</h1>
              <button id="logoutbutton">Logout</button>
            </div>
        )
    }
}
export default SlidePanel
