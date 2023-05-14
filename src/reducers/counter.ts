import { allTypes } from "../actions/actionsForReducer";

function counterReducer(state :number = 0, action: any) :number{
  switch (action.type) {
    case allTypes.INCREMENT:
      return state + 1;
    case allTypes.DECREMENT:
      return state - 1;
    default:
      return state;
  }
}

export default counterReducer;
