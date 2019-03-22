import React,  {Component} from 'react';
import {Link} from 'react-router-dom';

class Edit extends Component {
  render() {
    const {handleDate, handleState, stateSelected, discardData, dateSelected, saveDay} = this.props;
    return (
      <>
      <div className="Edit">
        <label>
          Fecha:
          <input id="date" type="date" onChange={handleDate} value={dateSelected}></input>
        </label>
      </div>
      <div className="estado">
        Estado:
        <label  htmlFor="edit" className="option-genre">
          <input className="option-happy" id="happy" type="radio" value="happy" name="state" onChange={handleState} checked={stateSelected==="happy"?true:false} />
          <p className="option-happy-label">:)</p>
        </label>
        <label  htmlFor="edit" className="option-genre">
          <input className="option-unhappy" id="unhappy" type="radio" value="unhappy" name="state" onChange={handleState} checked={stateSelected==="unhappy"?true:false} />
          <p className="option-unhappy-label">:(</p>
        </label>
        <label htmlFor="edit">
          <input type="button" className="edit_btn save" value="Guardar" onClick={saveDay} />
        </label>
        <label htmlFor="edit">
          <input type="button" className="edit_btn discard" value="Descartar" onClick={discardData} />
        </label>
      </div>
      <Link to="/List">List Component</Link>
      </>
    );
  }
}

export default Edit;