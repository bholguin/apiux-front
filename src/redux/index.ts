import { createStore, applyMiddleware, compose } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { useReducers } from "../models/reducers";

const useStoreConfig = () => {
  const reducers: any = useReducers();

  const initialState: any = {};
  let middlewaresToApply = [thunk];

  const persistConfig = {
    key: "root",
    storage: storage,
  };

  const persistReduce = persistReducer(persistConfig, reducers);

  if (process.env.NODE_ENV === "development") {
    const reduxInmmutableStateInvariant =
      require("redux-immutable-state-invariant").default();
    middlewaresToApply = [...middlewaresToApply, reduxInmmutableStateInvariant];
  }

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  let store = createStore(
    persistReduce,
    initialState,
    composeEnhancers(applyMiddleware(...middlewaresToApply))
  );

  const persistor = persistStore(store);

  return {
    store,
    persistor,
  };
};

export default useStoreConfig;
