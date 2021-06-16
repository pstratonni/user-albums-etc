import { combineReducers } from "redux";
import { AlbumReducer } from "./AlbumReducer";
import { CommentsReducer } from "./CommentsReducer";
import { PersonsReducer } from "./PersonReducer";
import { PhotosReducer } from "./PhotosReducer";
import { PostsReducer } from "./PostsReducer";

const RootReducer = combineReducers({
  persons: PersonsReducer,
  posts: PostsReducer,
  albums: AlbumReducer,
  photos: PhotosReducer,
  comments: CommentsReducer,
});
export default RootReducer;
