import { combineReducers } from "redux";
import { AlbumReducer } from "./AlbumReducer";
import { PersonsReducer } from "./PersonReducer";
import { PostsReducer } from "./PostsReducer";

const RootReducer = combineReducers({
  persons: PersonsReducer,
  posts: PostsReducer,
  albums:AlbumReducer
});
export default RootReducer;
