import React, {Component} from 'react';
import Header from './Header';

class List extends Component {
  render() {
    const {savedStates, resetForm} = this.props;
    if(savedStates.length>0) {
      return(
        <div className="main">
          <Header resetForm={resetForm} />
          <ul className="days-list">
            {
              savedStates.map((item, index) => {
                return (
                  <>
                <li className="days-list-item" key={index} >
                  <div><i className={`icon ${item.state} fas ${item.state==="happy"?"fa-laugh-beam":"fa-frown"}`}></i></div>
                  <div>{item.date}</div>
                </li>
                  <div className="saved-message modal">{item.message}</div>
                </>
                )
              })
            }
          </ul>
        </div>
      );
    } else {
      return(
        <div className="main">
          <Header />
          <div className="List">
            No hay datos guardados
          </div>
        </div>
      );
    }
  }
}

export default List;