import React,  {Component} from 'react';
import {Link} from 'react-router-dom';

class Edit extends Component {
  render() {
    const {handleDate, handleState, stateSelected, discardData, dateSelected, saveDay, handleMessage} = this.props;

    return (
      <>
        <form className="edit-form">
          <div className="date-group">
            <label className="label-date">
              <h2 className="title">Fecha:</h2>
              <input id="date" type="date" onChange={handleDate} value={dateSelected}></input>
            </label>
          </div>
          <div className="state-group">
            <h2 className="title">Estado:</h2>
            <div className="state-group-inputs">
              <label  htmlFor="edit-form" className="option-genre">
                <input className="option-genre-input" id="happy" type="radio" value="happy" name="state" onChange={handleState} checked={stateSelected==="happy"?true:false} />
                <p className="option-genre-label">: )</p>
              </label>
              <label  htmlFor="edit-form" className="option-genre">
                <input className="option-genre-input" id="unhappy" type="radio" value="unhappy" name="state" onChange={handleState} checked={stateSelected==="unhappy"?true:false} />
                <p className="option-genre-label">: (</p>
              </label>
            </div>
            <label htmlFor="edit-form" className="label-message">
                <input type="text" className={stateSelected==="unhappy" || stateSelected==="" ? "message hidden" : "message"} onKeyUp={handleMessage} disabled={stateSelected==="unhappy"||stateSelected===""?true:false} placeholder="Qué guay! ¿Por qué ha sido un buen día?" />
            </label>
            <div className="btn-group">
              <label htmlFor="edit-form">
              <Link to="/" className="link"><input type="button" className="edit_btn save" value="Guardar" onClick={saveDay} /></Link>
              </label>
              <label htmlFor="edit-form">
                <input type="button" className="edit_btn discard" value="Descartar" onClick={discardData} />
              </label>
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default Edit;