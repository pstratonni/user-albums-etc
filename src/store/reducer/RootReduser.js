import { combineReducers } from "redux";
import { PersonsReduser } from "./PersonReducer";
import { PostsReduser } from "./PostsReduser";

const RootReducer = combineReducers({
  persons: PersonsReduser,
  posts: PostsReduser,
});
export default RootReducer;
