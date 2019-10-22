import { ADD_COURSE } from "../actions/courseActions";

export default function courseReducer(state = [], action) {
  switch (action.type) {
    case ADD_COURSE:
      debugger;
      return [...state, action.courses];
    default:
      return state;
  }
}
