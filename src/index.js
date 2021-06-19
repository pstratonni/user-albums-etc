import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./components/App";
import { store } from "./store/store";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faThumbsUp,
  faThumbsDown,
  faHeart,
  faHeartBroken,
  faTrash,
  faPlusCircle,
  faChevronRight,
  faLevelDownAlt,
  faLevelUpAlt,
  faTimesCircle,
  faComments,
  faImage,
  faFolder,
  faUserEdit,
  faUserTimes,
  faFolderOpen,
  faUsers,
  faUserPlus,
  faBlog,
  faImages,
  faLaptopHouse
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faThumbsUp,
  faThumbsDown,
  faHeart,
  faHeartBroken,
  faTrash,
  faPlusCircle,
  faChevronRight,
  faLevelDownAlt,
  faLevelUpAlt,
  faTimesCircle,
  faComments,
  faImage,
  faFolder,
  faUserEdit,
  faUserTimes,
  faFolderOpen,
  faUsers,
  faUserPlus,
  faBlog,
  faImages,
  faLaptopHouse
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
