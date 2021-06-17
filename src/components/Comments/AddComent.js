import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-cool-form";
// import { GlobalContext } from "../App";
import { connect } from "react-redux";
import { addNewComment } from "../../store/action/comments";
import { CHANGE_EDIT_COMMENTS } from "../../store/typeList";
import InputField from "../FormComponents/InputField";

const AddComment = ({
  postId,
  activePerson,
  addNewComments,
  addComment,
  setAddComment,
}) => {
  const { form, use } = useForm({
    defaultValues: {
      postId,
      body: "",
    },
    onSubmit: (values) => onSubmit(values),
    onStateChange:(values)=>{
      values.personId=activePerson
    }
  });
  const errors = use("errors", { errorWithTouched: true });


  const onSubmit = (comment) => {
    comment.personId=activePerson
    addNewComments(comment);
  };

  const renderForm = () => {
    return (
      <form ref={form} noValidate>
        <InputField
          type="text"
          id="comment"
          name="body"
          label="Comment"
          required
          error={errors.body}
        />
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
