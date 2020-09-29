import { Person } from "./../reducers/PersonReducer";
export type ActionAddNote = { type: "ADD_NOTE"; payload: string };
export type ActionListPerson = { type: "LIST_PERSON"; payload: Person };
export type ActionAddPerson = { type: "ADD_PERSON"; payload: Person };
export type ActionDeletePerson = { type: "DELETE_PERSON"; payload: string };
export type ActionGetUpdatePerson = {
  type: "GET_UPDATE_PERSON";
  payload: Person;
};
export type ActionFilterName = { type: "FILTER_AGE"; payload: string };

export const addNote = (note: string): ActionAddNote => ({
  type: "ADD_NOTE",
  payload: note,
});

export const listPerson = (person: Person): ActionListPerson => ({
  type: "LIST_PERSON",
  payload: person,
});

export const addPerson = (person: Person): ActionAddPerson => ({
  type: "ADD_PERSON",
  payload: person,
});

export const deletePerson = (id: string): ActionDeletePerson => ({
  type: "DELETE_PERSON",
  payload: id,
});

export const getUpdatePerson = (person: Person): ActionGetUpdatePerson => ({
  type: "GET_UPDATE_PERSON",
  payload: person,
});

export const filterName = (name: string): ActionFilterName => ({
  type: "FILTER_AGE",
  payload: name,
});
