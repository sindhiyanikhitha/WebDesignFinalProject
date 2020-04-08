import { createSelector } from "reselect";
const selectPost = (state) => state.post;
export const selectPostsData = createSelector(
  [selectPost],
  (post) => post.posts
);
export const selectIsPostsFetching = createSelector(
  [selectPost],
  (post) => post.isFetching
);
