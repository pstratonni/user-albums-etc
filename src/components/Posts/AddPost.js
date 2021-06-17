import React from "react";
import { useForm } from "react-cool-form";
import { connect } from "react-redux";
import { addNewPost } from "../../store/action/posts";
import { CHANGE_EDIT_POST } from "../../store/typeList";
import InputField from "../FormComponents/InputField";

const AddPost = ({ onFinish, setAddPost, activePerson }) => {

  const { form, use } = useForm({
    defaultValues: { title: "", short: "", body: "", personId: activePerson },
    onSubmit: (values) => onFinish(values),
  });

  const errors = use("errors", { errorWithTouched: true });

  return (
    <form ref={form} noValidate>
      <InputField
        type="text"
        name="title"
        id="title"
        label="Title"
        required
        error={errors.title}
      />
      <InputField
        type="text"
        name="short"
        id="short"
        label="Short Text"
        required
        error={errors.short}
      />
      <InputField
        type="text"
        name="body"
        id="body"
        label="Post text"
        required
        error={errors.title}
      />
      <button type="submit" className="btn btn-danger my-2">
        Add Post
      </button>
      <button className="btn btn-danger my-2 mx-2" onClick={() => setAddPost()}>
        Close
      </button>
    </form>
  );
};
const mapStateToProps = (state) => {
  return {
    activePerson: state.persons.activePerson,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onFinish: (post) => dispatch(addNewPost(post)),
    setAddPost: () => dispatch({ type: CHANGE_EDIT_POST }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddPost);
