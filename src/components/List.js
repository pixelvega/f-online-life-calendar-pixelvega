import React, {Component} from 'react';

class List extends Component {
  render() {
    const {savedStates} = this.props;
    if(savedStates.length>0) {
      return(
        <ul className="List">
          {
            savedStates.map((item, index) => {
              return (
              <li key={index}>
                <div>{item.state}</div>
                <div>{item.message}</div>
                <div>{item.date}</div>
              </li>
              )
            })
          }
        </ul>
      );
    } else {
      return(
      <div className="List">
        No hay datos guardados
      </div>
      );
    }
  }
}

export default List;