import React, { Component } from 'react';

class Detail extends Component {
  render() {
    const {id} = this.props;
    return (
      <div>
        {id}
      </div>
    );
  }
}

export default Detail;