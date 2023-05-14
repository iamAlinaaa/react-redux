import { allTypes } from "../actions/actionsForReducer";

function loggedReducer(state: boolean = false, action: any):boolean {
  switch (action.type) {
    case allTypes.SIGN_IN:
      return !state;
    default:
      return state;
  }
}

export default loggedReducer;
