import { ActionFilterName } from "../actions/actions";

const initialState = "";

export const filterAgeReducer = (
  state: string = initialState,
  action: ActionFilterName
) => {
  switch (action.type) {
    case "FILTER_AGE":
      console.log(action.payload);

      return action.payload;
    default:
      return state;
  }
};
