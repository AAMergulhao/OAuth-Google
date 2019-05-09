import React, {Component} from "react";
import {connect} from "react-redux";

class Header extends Component{
  renderContent(){
    switch (this.props.auth){
      case null:
          return;
      case false:
          return <li><a href="/auth/google">Login With Google</a></li>
      case true:
        return <li><a href="">Logout</a></li>
      default:
        return <li><a href="/auth/google">a</a></li>
        
    }
  }

    render (){
        console.log(this.props);
        return(
            <nav>
            <div className="nav-wrapper green">
              <a href="#" className="left brand-logo">Nexus</a>
              <ul id="nav-mobile" className="right">
                {this.renderContent()}
              </ul>
            </div>
          </nav>
        )
    }
}

function mapStateToProps({auth}){
  return{auth};
}
export default connect(mapStateToProps)(Header);