import React,  {Component} from 'react';
import {Link} from 'react-router-dom';

class Edit extends Component {
  render() {
    const {handleDate, handleState, stateSelected, discardData, dateSelected, saveDay, handleMessage} = this.props;

    return (
      <>
        <form className="Form">
          <div className="date-group">
            <label>
              <h2>Fecha:</h2>
              <input id="date" type="date" onChange={handleDate} value={dateSelected}></input>
            </label>
          </div>
          <div className="state-group">
            <h2>Estado:</h2>
            <label  htmlFor="edit" className="option-genre">
              <input className="option-happy" id="happy" type="radio" value="happy" name="state" onChange={handleState} checked={stateSelected==="happy"?true:false} />
              <p className="option-happy-label">:)</p>
            </label>
            <label  htmlFor="edit" className="option-genre">
              <input className="option-unhappy" id="unhappy" type="radio" value="unhappy" name="state" onChange={handleState} checked={stateSelected==="unhappy"?true:false} />
              <p className="option-unhappy-label">:(</p>
            </label>
            <label htmlFor="edit">
                <input type="text" onKeyUp={handleMessage} disabled={stateSelected==="unhappy"||stateSelected===""?true:false}/>
            </label>
            <label htmlFor="edit">
            <Link to="/"><input type="button" className="edit_btn save" value="Guardar" onClick={saveDay} /></Link>
            </label>
            <label htmlFor="edit">
              <input type="button" className="edit_btn discard" value="Descartar" onClick={discardData} />
            </label>
          </div>
        </form>
      </>
    );
  }
}

export default Edit;