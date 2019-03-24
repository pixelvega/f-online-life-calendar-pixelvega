import React, {Component} from 'react';
import Header from './Header';

class List extends Component {
  render() {
    const {savedStates, resetForm} = this.props;
    if(savedStates.length>0) {
      return(
        <>
          <Header resetForm={resetForm} />
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
        </>
      );
    } else {
      return(
        <>
          <Header />
          <div className="List">
            No hay datos guardados
          </div>
        </>
      );
    }
  }
}

export default List;