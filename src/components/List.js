import React, {Component} from 'react';
import Header from './Header';
import {Link} from 'react-router-dom';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null
    }
  }
  handleClick(item) {
    // if(item.state==="happy") {
    //   alert(`El ${item.date} era feliz porque: ${item.message}`);
    // }
    this.setState((prevState)=>{
      if(item.state==="unhappy") {
        return null;
      }
      if(prevState.selectedItem===null) {
        return {selectedItem: item};
      }
      return {
      selectedItem: (prevState.selectedItem.date===item.date)?null:item
    }});
  }

  render() {
    const {savedStates, resetForm} = this.props;

    if(savedStates.length>0) {
      return(
        <div className="list-wrapper">
          <Header resetForm={resetForm} />
          <main className="main">
          <div className="messageDay">
            {
              this.state.selectedItem!==null?<div>{this.state.selectedItem.date}</div>:null
            }
          </div>
            <ul className="days-list">
              {
                savedStates.map((item, index) => {
                  return (
                    <li className="days-list-item" key={index} onClick={() => {this.handleClick(item)}}>
                      <div><i className={`icon ${item.state} fas ${item.state==="happy"?"fa-laugh-beam":"fa-frown"}`}></i></div>
                      <div>{item.date}</div>
                      {/* <Link to={`/Detail/${item.date}`}>Link to Detail!</Link> */}
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

// onClick={this.handleClick.bind(this,item)}
// onClick={() => {this.handleClick(item)}}