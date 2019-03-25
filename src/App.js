import React, { Component } from 'react';
import './App.scss';
import {Switch, Route, withRouter} from 'react-router-dom';
import Edit from './components/Edit';
import List from './components/List';

class App extends Component {
  constructor(props) {
    super(props);
    const { match, location, history } = this.props;

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
    this.props.history.push("/");
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
      alert(`You can't reapeat the date and choose one state, please.`);
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
        console.log(this.state.dateSelected);
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

export default withRouter(App);
