import { createStore } from "redux";
import { notesReducer } from "../reducers/noteReducer";
import { personReducer } from "../reducers/PersonReducer";
import { combineReducers } from "redux";
import { personUpdateReducer } from "../reducers/personUpdateReducer";
import { filterAgeReducer } from "../reducers/filterAgeReducer";
const rootReducer = combineReducers({
  notesReducer,
  personReducer,
  personUpdateReducer,
  filterAgeReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
