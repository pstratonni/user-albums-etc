import React, { useContext, useEffect, useState } from "react";
// import { GlobalContext } from "../App";
import { connect } from "react-redux";
import { addNewComment } from "../../store/action/comments";
import { CHANGE_EDIT_COMMENTS } from "../../store/typeList";

const AddComment = ({
  postId,
  activePerson,
  addNewComments,
  addComment,
  setAddComment,
}) => {

  const [comment, setComment] = useState({
    id: "",
    postId,
    personId: activePerson,
    body: "",
  });
  
  useEffect(() => {
    setComment({ ...comment, personId: activePerson });
  }, [activePerson]);

  const changeHandle = (event) => {
    setComment({ ...comment, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
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
            onClick={() => setAddComment()}
          >
            Close
          </button>
          <button type="submit" className="btn btn-primary w-25 mx-2">
            Add
          </button>
        </div>
      </form>
    );
  };

  const renderButtons = () => {
    return addComment ? (
      renderForm()
    ) : (
      <button
        className="btn btn-danger w-25 my-2"
        onClick={() => setAddComment()}
      >
        Add new comment
      </button>
    );
  };

  return <div>{renderButtons()}</div>;
};
const mapStateToProps = (state) => {
  return {
    activePerson: state.persons.activePerson,
    addComment: state.comments.addComment,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addNewComments: (data) => dispatch(addNewComment(data)),
    setAddComment: () => dispatch({ type: CHANGE_EDIT_COMMENTS }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddComment);
