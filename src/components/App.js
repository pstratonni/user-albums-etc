import React, { Fragment, useEffect} from "react";
import Navigation from "./Navigation";
import Pages from "../Layouts/Pages";
import { connect } from "react-redux";
import { getPost } from "../store/action/posts";
import { getAlbums } from "../store/action/albums";
import { getPhotos } from "../store/action/photos";
import { getComments } from "../store/action/comments";

const App = ({ initPost, initAlbum, initPhotos, initComments }) => {
  useEffect(() => {
    initPost();
    initPhotos();
    initAlbum();
    initComments();
  }, []);

  return (
    <Fragment>
      <Navigation />
      <Pages />
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    initPost: () => dispatch(getPost()),
    initAlbum: () => dispatch(getAlbums()),
    initPhotos: () => dispatch(getPhotos()),
    initComments: () => dispatch(getComments()),
  };
};

export default connect(null, mapDispatchToProps)(App);
