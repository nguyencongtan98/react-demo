import { Person } from "./PersonReducer";
import { ActionGetUpdatePerson } from "./../actions/actions";
const initialState: Person = { id: "", name: "", age: 1, gender: true };

export const personUpdateReducer = (
  state: Person = initialState,
  action: ActionGetUpdatePerson
) => {
  switch (action.type) {
    case "GET_UPDATE_PERSON":
      return { ...action.payload };
    default:
      return state;
  }
};
