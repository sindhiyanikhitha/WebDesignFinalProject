import PostActionTypes from "./post.type";
import axios from "axios";
export const fetchPostsStart = () => ({
  type: PostActionTypes.FETCH_POSTS_START,
});
export const fetchPostStartAsync = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchPostsStart());
      const res = await axios.get("/api/post");
      dispatch(fetchPostsSuccess(res));
    } catch (err) {
      dispatch(fetchPostsFailure(err.message));
    }
  };
};
export const fetchPostsSuccess = (posts) => ({
  type: PostActionTypes.FETCH_POSTS_SUCCESS,
  payload: posts,
});
export const fetchPostsFailure = (err) => ({
  type: PostActionTypes.FETCH_POSTS_FAILURE,
  payload: err,
});
