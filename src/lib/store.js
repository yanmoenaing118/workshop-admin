import { createContext, useReducer } from "react";

export const context = createContext();

const getToken = () => localStorage.getItem("token") || null;

const initialState = {
  token: getToken(),
};


export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, token: "eyAbcdafdf" };
    case LOGOUT:
      return { ...state, token: null };
    default:
      break;
  }
};

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <context.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default StoreProvider;