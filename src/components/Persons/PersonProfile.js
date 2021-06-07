import React, { useState, useEffect, useContext, Fragment } from "react";
import { GlobalContext } from "../App";
import { useParams } from "react-router-dom";
import Loading from "../Home/Loading";
import AddAlbum from "../Albums/AddAlbum";
import PersonalAlbum from "../Albums/PersonalAlbums";
import AddPost from "../Posts/AddPost";
import PersonalBlog from "../Posts/PersonalBlog";
import { connect } from "react-redux";
import { deletePerson, editPerson } from "../../store/action/persons";
import { CHANGE_DELETE, CHANGE_EDIT } from "../../store/typeList";

const PersonProfile = ({
  activePerson,
  isEdit,
  editElement,
  changeIsEdit,
  personDelete,
  changeDelete,
  deleteElement,
}) => {
  const { id } = useParams();
  const { getPersonById, addNewAlbum, addNewPost } = useContext(GlobalContext);
  const [person, setPerson] = useState(null);
  const [addAlbum, setAddAlbum] = useState(false);
  const [addPost, setAddPost] = useState(false);
  // const [personDelete, setPersonDelete] = useState(false);

  useEffect(() => {
    setPerson(getPersonById(id));
  }, []);

  useEffect(() => {
    setPerson(getPersonById(id));
  }, [id]);

  useEffect(() => {
    const div = addAlbum ? document.querySelector(".mod-album") : null;
    if (div) {
      div.style.top = `${document.documentElement.scrollTop}px`;
    }
    const div1 = isEdit ? document.querySelector(".mod-form") : null;
    if (div1) {
      div1.style.top = `${document.documentElement.scrollTop}px`;
    }
    const divDelete = personDelete
      ? document.querySelector(".mod-delete")
      : null;
    if (divDelete) {
      divDelete.style.top = `${document.documentElement.scrollTop}px`;
    }
    const body = document.querySelector("body");
    body.style.overflow = addAlbum || isEdit ? "hidden" : "auto";
  }, [addAlbum, isEdit, personDelete]);

  const renderProfile = () => {
    if (!person) return <Loading />;
    return (
      <div className="container">
        <div className={"card w-100" + isEdit ? "position-static" : ""}>
          {isEdit ? renderForm() : null} {renderInfo()}
          {personDelete ? renderFormDelete() : null}
        </div>
        {renderEditButton()}
      </div>
    );
  };

  const renderInfo = () => {
    return (
      <Fragment>
        <img
          src={person.avatar}
          className="card-img-top"
          alt="{person.fName} {person.lName}"
        />
        <div className="card-body">
          <h3 className="card-title">
            {person.fName} {person.lName}
          </h3>
          <div className="card-text">
            <p>{person.age}</p>
            <p>{person.phone}</p>
            <p>{person.email}</p>
          </div>
        </div>
      </Fragment>
    );
  };

  const renderEditButton = () => {
    if (activePerson !== person.id || isEdit || addPost) return null;
    return (
      <div className="row">
        <button
          onClick={editButtonHandle}
          className="col-6 btn btn-success my-2"
        >
          Edit
        </button>
        <button onClick={deleteHandle} className="col-6 btn btn-danger my-2">
          {" "}
          Delete me
        </button>
        <button
          onClick={addAlbumButtonHandel}
          className="w-100 btn btn-info mb-2"
        >
          Add Album
        </button>
        <button
          onClick={addPostButtonHandle}
          className="w-100 btn btn-danger mb-2"
        >
          Add Post
        </button>
      </div>
    );
  };

  const editButtonHandle = (event) => {
    event.preventDefault();
    changeIsEdit();
  };

  const addAlbumButtonHandel = (event) => {
    event.preventDefault();
    setAddAlbum(true);
  };

  const addPostButtonHandle = (event) => {
    event.preventDefault();
    setAddPost(true);
  };

  const deleteHandle = (event) => {
    event.preventDefault();
    changeDelete();
  };

  const renderForm = () => {
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
                  value={person.fName}
                  name="fName"
                  onChange={changeFieldHandle}
                />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={person.lName}
                  name="lName"
                  onChange={changeFieldHandle}
                />
              </div>
              <div className="form-group">
                <label>Age</label>
                <input
                  type="text"
                  className="form-control"
                  value={person.age}
                  name="age"
                  onChange={changeFieldHandle}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="text"
                  className="form-control"
                  value={person.email}
                  name="email"
                  onChange={changeFieldHandle}
                />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input
                  type="text"
                  className="form-control"
                  value={person.phone}
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
          <div className="off" onClick={() => changeIsEdit(false)}>
            <p>X</p>
          </div>
        </div>
      </div>
    );
  };

  const deletePersonHandle = (event) => {
    event.preventDefault();
    deleteElement(person.id);
    changeDelete();
  };

  const renderFormDelete = () => {
    return (
      <div className="mod-delete">
        <div className="mod-1-delete bg-light">
          <h3 className="mt-3">
            Delete ProFile {person.fName + " " + person.lName}
          </h3>
          <a href="#" onClick={deletePersonHandle} className="btn btn-danger">
            Delete me
          </a>
          <div className="off" onClick={() => changeDelete()}>
            <p>X</p>
          </div>
        </div>
      </div>
    );
  };

  const changeFieldHandle = (event) => {
    setPerson({ ...person, [event.target.name]: event.target.value });
  };

  const submitFormHandle = (event) => {
    event.preventDefault();
    editElement(person);
    changeIsEdit();
  };

  const renderPersonInfo = () => {
    return (
      <Fragment>
        {addAlbum ? (
          <AddAlbum
            onFinish={addNewAlbumHandle}
            setAddAlbum={setAddAlbum}
            addAlbum={addAlbum}
          />
        ) : null}

        <PersonalAlbum personId={+id} />
        {addPost ? (
          <AddPost onFinish={addNewPostHandle} setAddPost={setAddPost} />
        ) : null}
        <div>
          <PersonalBlog personId={+id} />
        </div>
      </Fragment>
    );
  };

  const addNewAlbumHandle = (formData) => {
    addNewAlbum(formData);
    setAddAlbum(false);
  };

  const addNewPostHandle = (post) => {
    addNewPost(post);
    setAddPost(false);
  };

  return (
    <section className="container">
      <div className="row">
        <div className="col-6 col-sm-4">{renderProfile()}</div>
        <div className="col-6 col-sm-8">{renderPersonInfo()}</div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    activePerson: state.persons.activePerson,
    isEdit: state.persons.isEdit,
    personDelete: state.persons.personDelete,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteElement: (personId) => dispatch(deletePerson(personId)),
    editElement: (data) => dispatch(editPerson(data)),
    changeIsEdit: () => dispatch({ type: CHANGE_EDIT, payload: "" }),
    changeDelete: () => dispatch({ type: CHANGE_DELETE, payload: "" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonProfile);
