import React from "react";

const DelWind = ({ onClickDelete, changeDelPhoto }) => {
  return (
    <div className="mod">
      <div className="mod-1 bg-light p-3">
        <h4 className="">Delete photo</h4>
        <form className=" mx-auto" onSubmit={onClickDelete}>
          <div className="form-group">
            <button type="submit" className="btn btn-danger w-25 mx-3">
              Delete
            </button>
            <button
              onClick={() => changeDelPhoto(false)}
              className="btn btn-info w-25"
            >
              No
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default DelWind;
