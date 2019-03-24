import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return(
      <Link to="/Edit/" className="link" onClick={this.props.resetForm}>
        <div className="header">+</div>
      </Link>
    );
  }
}

export default Header;