import { createStore, applyMiddleware, compose } from "redux";
import rootReducers from "./Reducer";
import thunk from "redux-thunk";

export const storeRedux = createStore(
  rootReducers,
  compose(
    applyMiddleware(thunk),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
