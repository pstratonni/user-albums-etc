import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {useState} from 'react'
import {connect} from 'react-redux'
import {editPerson} from '../../store/action/persons'
import { CHANGE_EDIT } from '../../store/typeList'

const EditPersonForm=({person, editElement,changeIsEdit})=>{

const [formData, setFormData]=useState(person)

    const changeFieldHandle = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
      };

      const submitFormHandle = (event) => {
        event.preventDefault();
        editElement(formData);
      };


        return (
          <div className="mod-form">
            <div className="mod-1-form bg-light">
              <div className="w-100 ">
                <form onSubmit={submitFormHandle} className="my-2">
                  <div className="form-group">
                    <label>First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={formData.fName}
                      name="fName"
                      onChange={changeFieldHandle}
                    />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={formData.lName}
                      name="lName"
                      onChange={changeFieldHandle}
                    />
                  </div>
                  <div className="form-group">
                    <label>Age</label>
                    <input
                      type="text"
                      className="form-control"
                      value={formData.age}
                      name="age"
                      onChange={changeFieldHandle}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="text"
                      className="form-control"
                      value={formData.email}
                      name="email"
                      onChange={changeFieldHandle}
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone</label>
                    <input
                      type="text"
                      className="form-control"
                      value={formData.phone}
                      name="phone"
                      onChange={changeFieldHandle}
                    />
                  </div>
                  <div className="form-group mb-2">
                    <label>Avatar</label>
                    <input
                      type="text"
                      className="form-control"
                      value={person.avatar}
                      name="avatar"
                      onChange={changeFieldHandle}
                    />
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-danger w-100">
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
              <div className="off" onClick={() => changeIsEdit()}>
                <p><FontAwesomeIcon icon='times-circle' className="red"/></p>
              </div>
            </div>
          </div>
        );
      
}

const mapDispatchToProps=dispatch=>{
return {
    changeIsEdit: () => dispatch({ type: CHANGE_EDIT}),
    editElement: (data) => dispatch(editPerson(data)),
}
}

export default connect(null, mapDispatchToProps)(EditPersonForm)