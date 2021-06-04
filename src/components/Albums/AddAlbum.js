import React, { useState } from "react";
import { connect } from "react-redux";

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
        <div className="off" onClick={() => setAddAlbum(false)}>
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
export default connect(mapStateToProps)(AddAlbum);
