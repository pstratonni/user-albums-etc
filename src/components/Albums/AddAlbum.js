import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useForm } from "react-cool-form";
import { connect } from "react-redux";
import { addNewAlbum } from "../../store/action/albums";
import { CHANGE_EDIT_ALBUM } from "../../store/typeList";
import InputField from "../FormComponents/InputField";

const AddAlbum = ({ onFinish, setAddAlbum, activePerson }) => {
  const { form, use } = useForm({
    defaultValues: {
      personId: activePerson,
      title: "",
    },
    onSubmit: (values) => onFinish(values),
  });
  const errors = use("errors", { errorWithTouched: true });
  return (
    <div className="mod-album">
      <div className="mod-1-album bg-light">
        <form ref={form}>
          <InputField
            type="text"
            id="title_album"
            name="title"
            label="Title"
            required
            error={errors.title}
          />
          <div className="form-group">
            <button type="submit" className="btn btn-primary w-100">
              Add
            </button>
          </div>
        </form>
        <div className="off" onClick={() => setAddAlbum()}>
          <p><FontAwesomeIcon icon='times-circle' className="red"/></p>
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
const mapDispatchToProps = (dispatch) => {
  return {
    setAddAlbum: () => dispatch({ type: CHANGE_EDIT_ALBUM }),
    onFinish: (data) => dispatch(addNewAlbum(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddAlbum);
