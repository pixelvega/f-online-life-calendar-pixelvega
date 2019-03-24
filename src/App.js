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
    this.handleMessage = this.handleMessage.bind(this);
    this.discardData = this.discardData.bind(this);
    this.saveDay = this.saveDay.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.checkRepeatedDate = this.checkRepeatedDate.bind(this);
    this.checkSelectedState = this.checkSelectedState.bind(this);
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
  }

  saveDay() {
    let {stateSelected, messageInserted, dateSelected, savedStates} = this.state;

    if (stateSelected==="unhappy") {
      messageInserted = "";
    }

    const newState = {
      state: stateSelected,
      message: messageInserted,
      date: dateSelected
    }
    if (!this.checkRepeatedDate() && !this.checkSelectedState() ){
      this.setState(prevState => ({
        savedStates: [...prevState.savedStates, newState]
      }));
    } else {
      alert('This date is already saved. Pick another date, please.')
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
            <List savedStates={savedStates} resetForm={this.resetForm} />
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;
