import React, { createContext, useReducer, useContext } from "react";

export const AppContext = createContext();

export const SET_USER_DATA = "SET_USER_DATA";

function reducer(state, action) {
  switch (action.type) {
    case SET_USER_DATA: {
      return { ...state, user: action.payload };
    }
    default:
      return state;
  }
}

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    user: null,
  });

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;

export function useAppState() {
  const { state, dispatch } = useContext(AppContext);
  return { state, dispatch };
}
