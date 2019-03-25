import React, { Component } from 'react';
import './App.scss';
import {Switch, Route, withRouter} from 'react-router-dom';
import Edit from './components/Edit';
import List from './components/List';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dateSelected: new Date().toISOString().slice(0, 10),
      stateSelected: '',
      messageInserted: '',
      savedStates: []
    };

    this.handleDate = this.handleDate.bind(this);
    this.handleState = this.handleState.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
    this.discardData = this.discardData.bind(this);
    this.saveDay = this.saveDay.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.checkRepeatedDate = this.checkRepeatedDate.bind(this);
    this.checkSelectedState = this.checkSelectedState.bind(this);
    this.orderResultsByDate = this.orderResultsByDate.bind(this);
  }

  componentDidMount(){
    this.checkLocalStorage();
  }
  
  componentDidUpdate() {
    this.saveLocalStorage(this.state.savedStates, 'savedStates');
  }


  checkLocalStorage() {
    if(localStorage.getItem('savedStates') !== null) {
      const savedStates = JSON.parse(localStorage.getItem('savedStates'));
      this.setState({
        savedStates: savedStates
      });
    }
  }

  saveLocalStorage(value, key) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  handleDate(e) {
    const date = e.currentTarget.value;
    this.setState({
      dateSelected: date
    });
  }

  handleState(e) {
    const state = e.currentTarget.value;

    this.setState({
      stateSelected: state
    });
  }

  handleMessage(e) {
    let message = e.currentTarget.value;

    this.setState({
      messageInserted: message
    });
  }

  discardData() {

    this.setState({
      dateSelected: new Date().toISOString().slice(0, 10),
      stateSelected: ''
    });
    this.props.history.push("/");
  }

  orderResultsByDate(savedStates) {
    const orderedStates = savedStates.sort(
      function (a, b) {
        if (a.date > b.date) {
          return 1;
        } else if (a.date < b.date) {
          return -1;
        } else {
          return 0;
        }
      }
    );

    return orderedStates; 
  }

  saveDay() {
    let {stateSelected, messageInserted, dateSelected} = this.state;

    if (stateSelected==="unhappy") {
      messageInserted = "";
    }

    const newDay = {
      state: stateSelected,
      message: messageInserted,
      date: dateSelected
    }

    if (!this.checkRepeatedDate() && !this.checkSelectedState() && !(dateSelected === "")){

      this.setState(prevState => ({
        savedStates: [...prevState.savedStates, newDay]
      }));
      this.props.history.push("/");
    } else {

      alert(`Elige una fecha no guardada y un estado, por favor ;)`);
    }
  }

  resetForm() {

    this.setState({
      dateSelected: new Date().toISOString().slice(0, 10),
      stateSelected: '',
      messageInserted: ''
    })
  }

  checkRepeatedDate() {
    const {savedStates} = this.state;

    for (const date of savedStates) {
      if(this.state.dateSelected === date.date) {
        return true;
      }
    }
  }

  checkSelectedState() {
    const {stateSelected} = this.state;

    if(stateSelected === '') {
      return true;
    }
  }

  render() {
    const {stateSelected, dateSelected, savedStates} = this.state;

    return (
      <div className="App">
        <Switch>
          <Route path="/Edit/" render={()=>
            <Edit handleDate={this.handleDate} handleState={this.handleState} handleMessage={this.handleMessage} stateSelected={stateSelected} dateSelected={dateSelected} discardData={this.discardData} saveDay={this.saveDay} />
          }/>

          <Route exact path="/" render={()=>
            <List savedStates={this.orderResultsByDate(savedStates)} resetForm={this.resetForm} />
          }/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
