import { createStore } from 'redux';

const initState = {
  posts: [],
  comments: [],
  userInSession: {name: 'Me', email: 'me@email.com'}
};


export const store = createStore(reducer, initState);


function reducer(state, { type, payload }) {
  switch (type) {
    case 'ADD_COMMENT':
      return {
        ...state,
        comments: [...state.comments, payload]
      };
    case 'SET_POSTS':
      return {
        ...state,
        posts: payload
      };
    case 'SET_COMMENTS':
      return {
        ...state,
        comments: payload
      };
    default:
      return state;
  }
}

export const addCommentAction = (comment) => ({
  type: 'ADD_COMMENT',
  payload: comment
});

export const setPostsAction = (posts) => ({
  type: 'SET_POSTS',
  payload: posts
});

export const setCommentsAction = (comments) => ({
  type: 'SET_COMMENTS',
  payload: comments
});