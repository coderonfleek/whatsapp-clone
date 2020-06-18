import React, { createContext, useReducer } from "react";
import db from "./FireStore";

let AppContext = createContext({});

const initialState = {
  count: 0,
  user: localStorage.getItem("whatsapp-user")
};

let reducer = (state, action) => {
  switch (action.type) {
    case "setCount": {
      return { ...state, count: action.payload.count };
    }

    case "loadUser": {
      console.log("Mutation called");
      localStorage.setItem("whatsapp-user", action.payload.user);
      return { ...state, user: action.payload.user };
    }

    default:
      return state;
  }
};

function AppContextProvider(props) {
  const fullInitialState = {
    ...initialState
  };

  let [state, dispatch] = useReducer(reducer, fullInitialState);
  let value = { state, dispatch };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
}

let AppContextConsumer = AppContext.Consumer;

export { AppContext, AppContextProvider, AppContextConsumer };
