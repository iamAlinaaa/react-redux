import { createStore } from "redux";
// import all combined reducers
import allReducers from "../reducers/allReducers";

// create store with all necessary combined Reducers
const store = createStore(allReducers);

export default store;
