import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useForm } from "react-cool-form";
import { connect } from "react-redux";
import { editPerson } from "../../store/action/persons";
import { CHANGE_EDIT } from "../../store/typeList";
import InputField from "../FormComponents/InputField";

const EditPersonForm = ({ person, editElement, changeIsEdit }) => {
  const { form, use } = useForm({
    defaultValues: {...person},
    onSubmit: (values) => submitFormHandle(values),
  });

  const errors = use("errors", { errorWithTouched: true });

  const submitFormHandle = (formData) => {
    editElement(formData);
  };

  return (
    <div className="mod-form">
      <div className="mod-1-form bg-light">
        <div className="w-100 ">
          <form ref={form} className="my-2" noValidate>
            <InputField
              type="text"
              id="fName"
              name="fName"
              label="First Name"
              required
              error={errors.fName}
            />
            <InputField
              type="text"
              id="lName"
              name="lName"
              label="Last Name"
              required
              error={errors.lName}
            />
            <InputField
              type="text"
              id="age"
              name="age"
              label="Age"
              required
              error={errors.age}
            />
            <InputField
              type="email"
              id="email"
              name="email"
              label="Email"
              required
              error={errors.email}
            />
            <InputField
              type="text"
              id="phone"
              name="phone"
              label="Phone"
              required
              error={errors.phone}
            />
            <InputField
              type="text"
              id="avatar"
              name="avatar"
              label="Avatar"
              required
              error={errors.avatar}
            />
            <div className="form-group">
              <button type="submit" className="btn btn-danger w-100">
                Save Changes
              </button>
            </div>
          </form>
        </div>
        <div className="off" onClick={() => changeIsEdit()}>
          <p>
            <FontAwesomeIcon icon="times-circle" className="red" />
          </p>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeIsEdit: () => dispatch({ type: CHANGE_EDIT }),
    editElement: (data) => dispatch(editPerson(data)),
  };
};

export default connect(null, mapDispatchToProps)(EditPersonForm);
