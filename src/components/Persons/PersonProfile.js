import React, { useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Home/Loading";
import AddAlbum from "../Albums/AddAlbum";
import PersonalAlbum from "../Albums/PersonalAlbums";
import AddPost from "../Posts/AddPost";
import PersonalBlog from "../Posts/PersonalBlog";
import { connect, useSelector } from "react-redux";
import { deletePerson } from "../../store/action/persons";
import {
  CHANGE_DELETE,
  CHANGE_EDIT,
  CHANGE_EDIT_ALBUM,
  CHANGE_EDIT_POST,
} from "../../store/typeList";
import EditPersonForm from "./EditPersonForm";

const PersonProfile = ({
  activePerson,
  isEdit,
  changeIsEdit,
  personDelete,
  changeDelete,
  deleteElement,
  addPost,
  setAddPost,
  setAddAlbum,
  addAlbum,
}) => {
  const { id } = useParams();
  const person= useSelector(state => {
    const idx=state.persons.list.findIndex(p=>p.id===+id)
    if(idx===-1)return null
    return state.persons.list[idx]
  })

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
    setAddAlbum();
  };

  const addPostButtonHandle = (event) => {
    event.preventDefault();
    setAddPost();
  };

  const deleteHandle = (event) => {
    event.preventDefault();
    changeDelete();
  };

  const renderForm = () => {
    return <EditPersonForm person={person} />;
  };

  const deletePersonHandle = (event) => {
    event.preventDefault();
    deleteElement(person.id);
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

  const renderPersonInfo = () => {
    return (
      <Fragment>
        {addAlbum ? <AddAlbum /> : null}
        <PersonalAlbum personId={+id} />
        {addPost ? <AddPost /> : null}
        <div>
          <PersonalBlog personId={+id} />
        </div>
      </Fragment>
    );
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
    addPost: state.posts.addPost,
    addAlbum: state.albums.addAlbum,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteElement: (personId) => dispatch(deletePerson(personId)),
    changeIsEdit: () => dispatch({ type: CHANGE_EDIT }),
    changeDelete: () => dispatch({ type: CHANGE_DELETE }),
    setAddPost: () => dispatch({ type: CHANGE_EDIT_POST }),
    setAddAlbum: () => dispatch({ type: CHANGE_EDIT_ALBUM }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonProfile);
