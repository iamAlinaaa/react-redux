// to combine all reducers we use combine reducer function from redux
import { combineReducers } from "redux";

// import necessary reducers
import counterReducer from "./counter";
import loggedReducer from "./isLogged";

// interface IReducers {
//     counter : number,
//     isLogged: boolean,
// }

const allReducers = combineReducers({
  counter : counterReducer,
  isLogged: loggedReducer,
});

export default allReducers;
