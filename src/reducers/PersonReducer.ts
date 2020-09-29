import {
  ActionListPerson,
  ActionAddPerson,
  ActionDeletePerson,
} from "./../actions/actions";

export interface Person {
  id: string;
  name: string;
  age: number;
  gender: boolean;
}

const initialState: Person[] = [
  { id: "1", name: "2", age: 12, gender: false },
  { id: "2", name: "1", age: 2, gender: true },
];

export const findIndex = (persons: Person[], id: string) => {
  let result: number = -1;
  persons.forEach((person, index) => {
    if (person.id === id) result = index;
  });
  return result;
};

export const personReducer = (
  state: Person[] = initialState,
  action: ActionListPerson | ActionAddPerson | ActionDeletePerson
) => {
  switch (action.type) {
    case "ADD_PERSON":
      const index2 = findIndex(state, action.payload.id);
      if (index2 >= 0) {
        state[index2] = action.payload;
      } else {
        state.push(action.payload);
      }
      return [...state];
    case "DELETE_PERSON":
      const index = findIndex(state, action.payload);
      state.splice(index, 1);
      return [...state];
    default:
      return state;
  }
};
