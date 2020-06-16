import React, { createContext, useReducer } from "react";
import db from "./FireStore";
import { useParams } from "react-router";

let AppContext = createContext({});

const initialState = {
  count: 0,
  user: {}
};

let reducer = async (state, action) => {
  switch (action.type) {
    case "setCount": {
      return { ...state, count: action.payload.count };
    }

    case "loadUsers": {
      let user;
      const fetchUser = await db
        .collection("users")
        .where("passcode", "==", "1234")
        .get();
      console.log(typeof fetchUser);
      //console.log(fetchUser.doc());
      /* user = fetchUser[0].data();
      console.log(user); */
      fetchUser.forEach((doc) => {
        //console.log(doc.id, "=>", doc.data().name);
        user = doc.data();
        console.log(user);
      });
      return { ...state, user: user };
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
