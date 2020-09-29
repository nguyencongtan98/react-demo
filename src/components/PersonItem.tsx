import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Person } from "./../reducers/PersonReducer";
import { RootState } from "./../stores/stores";
import { deletePerson, getUpdatePerson } from "./../actions/actions";

export const PersonItem = (): JSX.Element => {
  let persons: Person[] = useSelector<RootState, Person[]>(
    (state) => state.personReducer
  );

  const filterName: string = useSelector<RootState, string>(
    (state) => state.filterAgeReducer
  );

  if (filterName) {
    persons = persons.filter((person) => {
      return person.name.indexOf(filterName) !== -1;
    });
  }

  const dispatch = useDispatch();

  const onDeletePerson = (id: string) => {
    dispatch(deletePerson(id));
  };

  const onUpdatePerson = (person: Person) => {
    dispatch(getUpdatePerson(person));
  };

  const elements = persons.map((person) => {
    return (
      <tr key={person.id}>
        <td>{person.id}</td>
        <td>{person.name}</td>
        <td>{person.age}</td>
        <td>{person.gender ? "MALE" : "FEMALE"}</td>
        <td>
          <button type="button" onClick={() => onDeletePerson(person.id)}>
            DELETE
          </button>
        </td>
        <td>
          <button type="button" onClick={() => onUpdatePerson(person)}>
            UPDATE
          </button>
        </td>
      </tr>
    );
  });

  return <tbody>{elements}</tbody>;
};

/* const mapStateTpProps = (state: any) => {
  return {
    personReducer: state.personReducer,
  };
};

export default connect(mapStateTpProps, null)(PersonItem); */
