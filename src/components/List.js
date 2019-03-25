import React, {Component} from 'react';
import Header from './Header';

class List extends Component {
  render() {
    const {savedStates, resetForm, showMessage} = this.props;
    if(savedStates.length>0) {
      return(
        <div className="list-wrapper">
          <Header resetForm={resetForm} />
          <main className="main">
            <ul className="days-list">
              {
                savedStates.map((item, index) => {
                  return (
                  <li className="days-list-item" key={index} onClick={() =>
                    {
                      
                      if(item.state==="happy") {
                        alert(`El ${item.date} has sido feliz porque: ${item.message}`);
                      }
                    }
                  }>
                    <div><i className={`icon ${item.state} fas ${item.state==="happy"?"fa-laugh-beam":"fa-frown"}`}></i></div>
                    <div>{item.date}</div>
                  </li>
                  )
                })
              }
            </ul>
          </main>
        </div>
      );
    } else {
      return(
        <div className="list-wrapper">
          <Header />
          <main className="main">
            <div className="list-wrapper">
              No hay datos guardados
            </div>
          </main>
        </div>
      );
    }
  }
}

export default List;