import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return(
      <div className="header">
        <Link to="/Edit/" className="link" onClick={this.props.resetForm}>
          <div className="header-text">+</div>
        </Link>
      </div>
    );
  }
}

export default Header;