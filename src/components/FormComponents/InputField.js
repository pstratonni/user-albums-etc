import React from "react";
const InputField = ({ label, id, error, ...rest }) => {
  return (
    <div className="form-group my-2">
      <label>{label}</label>
      <input type="text" className="form-control" id={id} {...rest}/>
      {error && <p className="text-danger">{error}</p>}
    </div>
  );
};
export default InputField;
