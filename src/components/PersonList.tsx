import React from "react";
import { PersonItem } from "./PersonItem";
import { Person } from "./../reducers/PersonReducer";
import { useSelector } from "react-redux";
import { RootState } from "./../stores/stores";

export const PersonList = () => {
  const persons: Person[] = useSelector<RootState, Person[]>(
    (state) => state.personReducer
  );

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>AGE</th>
          <th>GENDER</th>
        </tr>
      </thead>
      <PersonItem />
    </table>
  );
};
