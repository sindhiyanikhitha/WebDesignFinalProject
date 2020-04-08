import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import postReducer from "../../redux/post/post.reducer";
export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  post: postReducer,
});
