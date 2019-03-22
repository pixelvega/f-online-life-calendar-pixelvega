import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
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
    this.discardData = this.discardData.bind(this);
    this.saveDay = this.saveDay.bind(this);
  }

  handleDate(e) {
    const date = e.currentTarget.value;
    console.log('date: ', date);
    this.setState({
      dateSelected: date
    });
  }

  handleState(e) {
    const state = e.currentTarget.value;
    console.log('state: ', state);
    this.setState({
      stateSelected: state
    });
  }

  discardData() {
    this.setState({
      dateSelected: new Date().toISOString().slice(0, 10),
      stateSelected: ''

    });
  }

  saveDay() {
    const {stateSelected, messageInserted, dateSelected, savedStates} = this.state;
    const newState = {
      state: stateSelected,
      message: messageInserted,
      date: dateSelected
    }
    this.setState(prevState => ({
      savedStates: [...prevState.savedStates, newState]
    }));
    return savedStates;
  }

  render() {
    const {stateSelected, dateSelected, savedStates} = this.state;
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={()=>
            <Edit handleDate={this.handleDate} handleState={this.handleState} stateSelected={stateSelected} dateSelected={dateSelected} discardData={this.discardData} saveDay={this.saveDay} />
          }/>
          <Route path="/List/" render={()=>
            <List savedStates={savedStates} />
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;
