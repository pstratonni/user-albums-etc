import React, { useState } from "react";
import { connect } from "react-redux";
import { addNewAlbum } from "../../store/action/albums";
import { CHANGE_EDIT_ALBUM } from "../../store/typeList";

const AddAlbum = ({ onFinish, setAddAlbum, activePerson }) => {
  const [formData, setFormData] = useState({
    personId: activePerson,
    title: "",
  });

  const changeHandle = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    onFinish(formData);
  };

  return (
    <div className="mod-album">
      <div className="mod-1-album bg-light">
        <form onSubmit={onSubmit}>
          <div className="form-group my-2">
            <label>Title</label>
            <input
              type="text"
              className="form-control"
              name="title"
              onChange={changeHandle}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary w-100">
              Add
            </button>
          </div>
        </form>
        <div className="off" onClick={() => setAddAlbum()}>
          <p>X</p>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    activePerson: state.persons.activePerson,
    
  };
};
const mapDispatchToProps=dispatch=>{
  return{
    setAddAlbum:()=>dispatch({type:CHANGE_EDIT_ALBUM}),
    onFinish:data=>dispatch(addNewAlbum(data)),
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(AddAlbum);
