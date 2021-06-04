import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../App";
import {connect} from 'react-redux'

const AddComment = ({ postId,activePerson }) => {
  const { addNewComments } = useContext(GlobalContext);
  const [comment, setComment] = useState({
    id:'',
    postId,
    personId: "",
    body: "",
  });
  const [addComent, setAddComment] = useState(false);

  useEffect(() => {
    setComment({ ...comment, personId: activePerson });
  }, [activePerson]);

  const changeHandle = (event) => {
    setComment({ ...comment, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setAddComment(false);
    addNewComments(comment);
  };

  const renderForm = () => {
    return (
      <form onSubmit={onSubmit}>
        <div className="form-group mb-2">
          <label>Comment</label>
          <input
            type="text"
            className="form-control"
            name="body"
            onChange={changeHandle}
          />
        </div>
        <div className="form-group">
          <button
            className="btn btn-danger w-25"
            onClick={() => setAddComment(false)}
          >
            Clouse
          </button>
          <button type="submit" className="btn btn-primary w-25 mx-2">
            Add
          </button>
        </div>
      </form>
    );
  };

  const renderButtons = () => {
    return addComent ? (
      renderForm()
    ) : (
      <button
        className="btn btn-danger w-25 my-2"
        onClick={() => setAddComment(true)}
      >
        Add new comment
      </button>
    );
  };

  return <div>{renderButtons()}</div>;
};
const mapStateToProps=state=>{
  return{
    activePerson:state.persons.activePerson
  }
}
export default connect(mapStateToProps,null)(AddComment);
