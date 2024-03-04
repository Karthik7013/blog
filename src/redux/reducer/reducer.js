import { LOGIN,USERDATA } from "../types/types";
let initialState = {
  isLoggedIn: false,
  user:null,
  myPosts: [],
  recentPosts: [],
};

export default function reducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case LOGIN:
      return { ...state, isLoggedIn: payload };
    case USERDATA:
      return {...state,user:{...payload}}
    default:
      return state;
  }
}
