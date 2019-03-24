import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return(
      <div className="Header">
        <Link to="/Edit/" onClick={this.props.resetForm}>+++++</Link>
      </div>
    );
  }
}

export default Header;