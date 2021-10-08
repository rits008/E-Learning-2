export const SET_USER_DATA = "SET_USER_DATA";
export const SET_COURSES = "SET_COURSES";

function reducer(state, action) {
  switch (action.type) {
    case SET_USER_DATA: {
      return { ...state, user: action.payload };
    }
    case SET_COURSES: {
      return { ...state, courses: action.payload };
    }
    default:
      return state;
  }
}

export default reducer;

export const setUserData = (payload) => ({
  type: SET_USER_DATA,
  payload,
});

export const setCourses = (payload) => ({
  type: SET_COURSES,
  payload,
});
